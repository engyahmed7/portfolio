import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, X, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Engy Ahmed",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    emailjs
      .send(
        "service_lo95hc9",
        "template_l0ews44",
        {
          to_name: formData.to_name,
          from_name: formData.from_name,
          message: formData.message,
          reply_to: formData.email,
        },
        "1S9pGWXGZf9Ap8mWa"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ ...formData, from_name: "", email: "", message: "" });

          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);

          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 ${
        darkMode ? "bg-gray-900/30" : "bg-gray-100/70"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Get In" highlight="Touch" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Let's Chat!</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Feel free to reach out for collaboration opportunities, job
              inquiries, or just to say hello! I'm always open to discussing
              new projects and ideas.
            </p>

            <div className="space-y-4 mt-8">
              {[
                {
                  icon: Mail,
                  value: "engya306@gmail.com",
                  label: "Email",
                  href: "mailto:engya306@gmail.com",
                },
                {
                  icon: Linkedin,
                  value: "linkedin/engyahmed",
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/engy-ahmed-4109751b7/",
                },
                {
                  icon: Github,
                  value: "github/engyahmed",
                  label: "GitHub",
                  href: "https://github.com/engyahmed7",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } flex items-center space-x-4`}
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <div className="text-sm text-gray-500">
                        {item.label}
                      </div>
                      <div
                        className={
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {item.value}
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-800/60" : "bg-white"
              } border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } shadow-lg relative`}
            >
              {showAlert && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-0 left-0 right-0 -mt-16 px-4"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 rounded-full p-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="font-medium">
                        Message sent successfully!
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAlert(false)}
                      className="text-white/80 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

              <form className="space-y-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } mb-1`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.from_name}
                      name="from_name"
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-900 border-gray-700 text-gray-300"
                          : "bg-white border-gray-300 text-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } mb-1`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-900 border-gray-700 text-gray-300"
                          : "bg-white border-gray-300 text-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } mb-1`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-900 border-gray-700 text-gray-300"
                        : "bg-white border-gray-300 text-gray-700"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } mb-1`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-900 border-gray-700 text-gray-300"
                        : "bg-white border-gray-300 text-gray-700"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg font-medium text-white shadow-lg shadow-indigo-500/20"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;