import { Metadata } from "next";
import { SigninGoogleButton } from "@/components/login-button";

export const metadata: Metadata = {
  title: "Sign in",
};

const SignIn = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect_url?: string }>;
}) => {
  const params = (await searchParams)?.redirect_url;
  let redirectUrl;
  if (!params) {
    redirectUrl = "/";
  } else {
    redirectUrl = `/${params}`;
  }
  console.log(redirectUrl);

  return (
    <div className="min-h-screen flex items-center bg-gray-900">
      <div className="bg-transparent border-2 border-yellow-500 w-96 mx-auto rounded-sm shadow p-8">
        <h1 className="text-4xl font-Light mb-1 t text-white">Sign In</h1>
        <p className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none">Sign In to your account</p>
        <div className="py-4 text-center">
          <SigninGoogleButton redirectUrl={redirectUrl} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
