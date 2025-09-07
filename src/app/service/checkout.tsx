import { getToken } from "@/lib/server-utils";
import { formSchema } from "../cart/checkout/page";
import { z } from "zod"

export async function checkoutt(idcart:string , shippingAddress:z.infer<typeof formSchema>){
    const token = await getToken();
    const res = await fetch(`${process.env}/api/v1/orders/${idcart}`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            token
        },
        body: JSON.stringify({ shippingAddress })
    })
    return await res.json();
}