"use client";
import clsx from "clsx";
// import { useFormState } from "react-dom";
// import { ContactMessage } from "@/lib/actions";
// import { ContactButton } from "@/components/button";

const ContactForm = () => {
  //   const [state, formAction] = useFormState(ContactMessage, null);
  return (
    <div className="bg-gray-900 p-8 rounded-sm shadow-sm">
      {/* Alert */}
      {/* {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-green-50"
          role="alert"
        >
          <div className="font-medium">{state?.message}</div>
        </div>
      ) : null} */}
      {/* End Alert */}
      <form action="">
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <input
              type="text"
              name="name"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Name*"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="PalmHotel@gmail.com"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Subject*"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {/* {state?.error?.subject} */}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Your message*"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {/* {state?.error?.message} */}
              </p>
            </div>
          </div>
        </div>
        {/* button submit */}
        <button
          type="submit"
          className={clsx(
            "px-10 py-4 text-center cursor-pointer transition-all bg-transparent text-white rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none"
            // {
            //   "opacity-50 cursor-progress animate-pulse": pending,
            // }
          )}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
