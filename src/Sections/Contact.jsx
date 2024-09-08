function Contact() {
  return (
    <section className="py-12 text-center">
      <div className="space-y-3">
        <div className="inline-block bg-neutral-900 text-white text-sm rounded-lg px-3 py-1">
          Contact
        </div>
        <h2 className="font-bold text-3xl sm:text-5xl">Get in Touch</h2>
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex flex-col justify-center gap-2">
          <div>Mobile: 061-5530778</div>
          <div>Email: thanaphon.namj@bumail.net</div>
        </div>
        <div className="flex justify-center gap-5">
          <a href="https://github.com/thanaphon-namj" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/thanaphon-namj" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
