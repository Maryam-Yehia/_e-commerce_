"use server"
import { cookies } from "next/headers";

function setCookie(name: string, value: string, days: number = 7) {
  if (typeof document !== 'undefined') {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }
}

export async function forgetpassword({email}:{email:string}){

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/resetPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    
    if (!res.ok) {
      return { error: res.statusText || "Failed to reset password" };
    }
    
    const result = await res.json();
    
    // Set cookie if password reset is successful and returns a token
    if (result?.token) {
      setCookie('next-auth.session-token', result.token, 7);
      // (await cookies()).set("next-auth.session-token" , result?.token );
    }
    
    return result;
}