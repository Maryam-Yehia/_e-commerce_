"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { verifyCode } from "@/app/service/ResetPassword";

const formSchema = z.object({
  code: z.string().min(6).max(6),

})

export default function Verifycode() {
  // const { email, setEmail }= useContext(EmailContext)as EmailContextType;
  const router = useRouter();

    const form = useForm({resolver: zodResolver(formSchema),
      defaultValues: {
        code: "",
      },
    })

  async function sendCode(data: z.infer<typeof formSchema>) {
    const res = await verifyCode(data?.code);
    console.log(res);
    if(res?.status === "Success"){
      toast.success(res?.message || "Verification code sent to your email");
      router.push("/auth/Resetpassword");
    }else{
      toast.error(res?.message || "Invalid verification code");
    }
  }
    
  return (
    <>
   <div className="flex flex-col items-center my-20">
    <h1 className="text-2xl font-semibold mb-6">Please enter your verification code</h1>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(sendCode)} className="space-y-8 w-md">

        {/* ***************code********** */}
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input placeholder="******" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
   </div>
          </>
  );
}


