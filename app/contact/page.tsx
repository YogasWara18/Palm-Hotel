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
      <TitleSection title="Contact Us" subTitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touch Today
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro in
              culpa ducimus ad. Tempore, alias?
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-md">
                  <IoMailOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Email :</h4>
                  <p>email-us@example.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-md">
                  <IoCallOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Phone Number :</h4>
                  <p>+88012 2910 1781, +88019 6128 1689</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-md">
                  <IoLocationOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Address :</h4>
                  <p>Coderx Street Road 2062, PDG, INDONESIA</p>
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
