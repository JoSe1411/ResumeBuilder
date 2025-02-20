import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// This is used to whitelist the routes which do not need the default authentication.
// Basically you do need to be logged in when you are on these routes.

const publicRoute = createRouteMatcher(["/","/sign-in(.*)","/sign-up(.*)"]);


export default clerkMiddleware(async (auth,request) =>{
    if(!publicRoute(request)){
        await auth.protect();
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};