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
import { forgetPasswords } from "@/app/service/ResetPassword";

const formSchema = z.object({
  email: z.email(),

})

export default function ForgetPassword() {
  // const { email, setEmail }= useContext(EmailContext)as EmailContextType;
  const router = useRouter();

    const form = useForm({resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
      },
    })

  async function sendEmail(data: z.infer<typeof formSchema>) {
    const res = await forgetPasswords(data?.email);
    if(res?.statusMsg === "success"){
      toast.success(res?.message || "Verification code sent to your email");
      router.push("/auth/Verifycode");
    }else{
      toast.error(res?.message);
    }
  }
    
  return (
    <>
   <div className="flex flex-col items-center my-20">
    <h1 className="text-2xl font-semibold mb-6">Please enter your verification code</h1>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-8 w-md">

        {/* ***************email********** */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" type="email" {...field} />
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


