// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   const token = req.headers.get("cookie")?.split("=")[1]; 
//   // لو بتستخدم cookies أو Auth headers
//   // أو لو بتستعمل NextAuth هتستخدم getToken هنا

//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart`, {
//     headers: {
//       token,
//     },
//   });

//   const data = await res.json();
//   return NextResponse.json(data);
// }
