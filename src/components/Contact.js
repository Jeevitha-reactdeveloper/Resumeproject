import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vuxa3jc",
      "template_6rpdai5",
      form.current,
      "gRfurdAK-Va1q4oZ0"
    )
    .then(() => {
      alert("Message sent successfully");
       form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };
  return (
    <section className="py-20 bg-secondary text-white" id="contacts">
      <div className="max-w-6xl mx-auto px-6 gap-10 items-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-orange-500">Contact Me</h2>
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div>
            <p className="text-white/80 mb-10">
              I'm always open to discussing new projects, opportunities,
              or collaborations. Feel free to reach out!
            </p>

            <div className="flex flex-col  text-white ">
              <p>📧 <a href="mailto:bejeevitha@gmail.com">bejeevitha@gmail.com</a></p>
              <a href="https://www.linkedin.com/in/jeevitha-frontenddeveloper/" className="mt-8"
              target="_blank"
              rel="noopener noreferrer">Linkedin</a><br></br>
              <a href="https://github.com/Jeevitha-reactdeveloper" className="mt-8"
              target="_blank"
              rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form ref={form} onSubmit={sendEmail} 
          className="bg-white/20 backdrop-blur-lg p-8 mt-2 rounded-2xl border border-white/30 shadow-xl space-y-5">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-white text-purple-700 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
  

