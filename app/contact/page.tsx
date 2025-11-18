import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import TitleSection from "@/components/title-section";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div>
      <TitleSection title="Contact Us" subTitle="We are here to help you unwind.

" />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl text-gray-900 mb-3 font-extralight">Contact Us</h1>
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              We are here to help you unwind.
            </h1>
            <p className="text-gray-700 py-5 font-normal">
              Whether you are planning a romantic
              getaway, a beachfront event, or simply have questions about your
              stay, our team is ready to assist you. Reach out to us anytime —
              well make sure your experience at Palm Hotel & Beach Club is
              seamless and unforgettable.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-md">
                  <IoMailOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Email :</h4>
                  <p>PalmHotel@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-md">
                  <IoCallOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Phone Number :</h4>
                  <p>+34 972 36 76 25</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-md">
                  <IoLocationOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Address :</h4>
                  <p>Carrer d Aribau, 3, 17310 Lloret de Mar, Barcelona, Spain</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
