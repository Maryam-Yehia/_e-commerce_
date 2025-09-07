"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  rePassword: z.string().min(8),
  phone: z.string()
}).refine((data) => data?.password == data?.rePassword,{
  error:"Passwords don't match"
})

export default function Signup() {
  const router = useRouter();

  const form = useForm({resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
      rePassword:"",
      phone: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);

   try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const pok = await res.json();
    console.log(pok);
    if(res?.ok){
      toast.success("Account created successfully");
      router.push("/auth/login");
    }
    if(!res?.ok) {
      toast.error(pok.message);
    }

   } catch (error) {
    console.log(error);

    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    toast.error(errorMessage);
   }
  }

  return (
   <div className="flex justify-center items-center my-20">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-md">

        {/* ***************name********** */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        {/* ***************password********** */}
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
        {/* ***************rePassword********** */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>rePassword</FormLabel>
              <FormControl>
                <Input placeholder="************" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ***************phone********** */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+20 " type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p> <Link href="/auth/login">Already have an account? <span className="text-blue-700 underline font-semibold">Login</span></Link> </p>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
   </div>
  )
}