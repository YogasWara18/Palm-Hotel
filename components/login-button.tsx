import { signIn } from "@/auth";
import { FaG } from "react-icons/fa6";

export const SigninGoogleButton = ({
  redirectUrl,
}: {
  redirectUrl: string;
}) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: redirectUrl });
        // await signIn("google");
      }}
    >
      <button className="flex items-center justify-center gap-2 w-fullcursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none">
        <FaG className="h-6 w-6" />
        Sign In With Google
      </button>
    </form>
  );
};
