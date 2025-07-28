import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 bg-[#0e0d1b] text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-8"></div>

      <form className="flex flex-col gap-4 max-w-xl mx-auto">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-white bg-opacity-10 text-white" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-white bg-opacity-10 text-white" />
        <textarea rows="5" placeholder="Your Message" className="p-3 rounded bg-white bg-opacity-10 text-white"></textarea>
        <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded text-white font-semibold">Send Message</button>
      </form>

      <div className="mt-8 text-gray-400 text-sm">
        <p><FaPhoneAlt className="inline-block mr-2" /> +91 93452 01338</p>
        <p><FaEnvelope className="inline-block mr-2 mt-2" /> tharani.mca2024@adhiyamaan.in</p>
      </div>
    </section>
  );
}
