import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen pt-24">
      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Have a project in mind or want to collaborate? Let’s connect.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* CONTACT INFO */}
        <div className="space-y-8">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <a
              href="mailto:vaibhavmishram3@gmail.com"
              className="text-gray-400 text-sm hover:text-blue-500 transition"
            >
              vaibhavmishram3@gmail.com
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
            <p className="text-gray-400 text-sm">India</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">💼 Availability</h3>
            <p className="text-gray-400 text-sm">
              Open for internships & freelance
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
          <form
            name="contactForm"
            action="https://formspree.io/f/mnqekeqg"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
