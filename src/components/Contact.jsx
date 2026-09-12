import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();

      // Efface le message de succès après 5 secondes
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="border-t border-stone-900 pb-20"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="my-16 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">

        {/* LEFT SIDE - CONTACT INFORMATION */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ y: -5 }}
          className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 backdrop-blur-sm"
        >
          {/* GLOW */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="relative z-10">
            <h3 className="mb-4 text-2xl font-semibold">
              Let's work together
            </h3>

            <p className="mb-8 leading-relaxed text-stone-400">
              Have a project, an opportunity or just want to talk about
              technology? Feel free to contact me.
            </p>

            {/* EMAIL */}
            <div className="mb-5 flex items-center gap-4">
              <FaEnvelope className="text-xl" />

              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all text-stone-300 transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* LOCATION */}
            {CONTACT.address && (
              <p className="mb-3 text-stone-400">
                {CONTACT.address}
              </p>
            )}

            {/* PHONE */}
            {CONTACT.phoneNo && (
              <p className="mb-8 text-stone-400">
                {CONTACT.phoneNo}
              </p>
            )}

            {/* SOCIAL NETWORKS */}
            <div className="flex gap-6">
              <motion.a
                href="TON_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="TON_GITHUB"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ y: -5 }}
          className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 backdrop-blur-sm"
        >
          {/* GLOW */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-400/10 blur-3xl"
          />

          <div className="relative z-10">
            <h3 className="mb-6 text-2xl font-semibold">
              Send me a message
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* NETLIFY FORM NAME */}
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-stone-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-stone-200 outline-none transition-colors placeholder:text-stone-600 focus:border-stone-600"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-stone-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-stone-200 outline-none transition-colors placeholder:text-stone-600 focus:border-stone-600"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm text-stone-400"
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-stone-200 outline-none transition-colors placeholder:text-stone-600 focus:border-stone-600"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-stone-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-stone-200 outline-none transition-colors placeholder:text-stone-600 focus:border-stone-600"
                />
              </div>

              {/* SUCCESS MESSAGE */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-green-900 bg-green-950/30 p-3 text-green-400"
                >
                  <FaCheckCircle />
                  Message sent successfully!
                </motion.div>
              )}

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-900 bg-red-950/30 p-3 text-center text-red-400"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={
                  status !== "sending"
                    ? { scale: 1.03 }
                    : {}
                }
                whileTap={
                  status !== "sending"
                    ? { scale: 0.97 }
                    : {}
                }
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-medium text-stone-900 transition-colors hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane />

                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;