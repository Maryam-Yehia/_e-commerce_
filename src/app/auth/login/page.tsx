"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export default function ProfileForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log(data);
    const res = await signIn('credentials',{
      email: data?.email,
      password: data?.password,
      callbackUrl:"/",
      redirect:false
    })
    if(res?.ok) router.replace("/");
    else{
      // alert(res?.error);
      toast.error(res?.error || "Something went wrong");
    }
    // console.log(res);
  }

  return (
   <div className="flex justify-center items-center h-screen">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-md">
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="************" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p> <Link href="/auth/signup">Don't have an account? <span className="text-blue-700 underline font-semibold">SignUp</span></Link> </p>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
   </div>
  )
}