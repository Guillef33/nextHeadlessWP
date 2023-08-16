// import { NextResponse, NextRequest } from "next/server";
// import { UserAuth } from "../context/AuthContext";

// // This function can be marked `async` if using `await` inside
// export function async authMiddleware(request: NextRequest) {
//   const { user } = UserAuth();
//   try {
//     return user;
//   } catch (errror) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/donar/:path*", "/contact/:path*"],
// };
