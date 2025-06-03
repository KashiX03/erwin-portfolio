import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RevealOnScroll } from "../RevealOnScroll";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const YOUR_SERVICE_ID = "service_hfbu4vz";
  const YOUR_TEMPLATE_ID = "template_tpzfw3k";
  const YOUR_PUBLIC_KEY = "_yJEsND-umBDcmGgH";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
      .then((result) => {
        // Dismiss loading toast and show success
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully!", {
          duration: 4000,
          position: "top-right",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        // Dismiss loading toast and show error
        toast.dismiss(loadingToast);
        toast.error(
          "An error occurred while sending the message. Please try again later.",
          {
            duration: 4000,
            position: "top-right",
          }
        );
      });
  };

  return (
    <>
      {/* Add the Toaster component */}
      <Toaster
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#f9fafb",
            border: "1px solid #374151",
          },
        }}
      />

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6 justify-center ">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-blue-400/10">
                      <FiMail className="h-6 w-6 text-cyan-600/80" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:erwinjoshuabangga@gmail.com"
                        className="text-gray-400 hover:text-cyan-500 transition-colors"
                      >
                        erwinjoshuabangga@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-blue-400/10">
                      <FiPhone className="h-6 w-6 text-cyan-600/80" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone Number</h4>
                      <a
                        href="tel:+639270644387"
                        className="text-gray-400 hover:text-cyan-500 transition-colors"
                      >
                        +63 927 064 4387
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-blue-400/10">
                      <FiMapPin className="h-6 w-6 text-cyan-600/80" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <a className="text-gray-400 hover:text-cyan-500 transition-colors">
                        San Pablo, Tarlac City, Tarlac, Philippines
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <h4 className="font-medium mb-4 text-center">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4 justify-center">
                    <a
                      href="https://www.linkedin.com/in/erwin-joshua-bangga-6622a929b/"
                      target="_blank"
                    >
                      <RiLinkedinBoxLine className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/erwinjoshua.bangga.5/"
                      target="_blank"
                    >
                      <FiFacebook className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/x.kshi/" target="_blank">
                      <FiInstagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-500/10 p-8 rounded-lg shadow-xs ">
                <h3 className="text-2xl font-semibold mb-6 ">Send a Message</h3>
                <form action="" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black focus:outline-hidden focus:ring-2 focus:ring-purple-500 placeholder-gray-600"
                      placeholder="Enter Your Name"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black focus:outline-hidden focus:ring-2 focus:ring-purple-500 placeholder-gray-600"
                      placeholder="Enter Valid Email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black focus:outline-hidden focus:ring-2 focus:ring-purple-500 placeholder-gray-600 resize-none"
                      placeholder="Hello, I would like to discuss..."
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
