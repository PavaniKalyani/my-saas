export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="border border-gray-700 shadow-lg rounded-xl p-10 max-w-lg w-full text-center">

        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations, projects, or just to say hello.
        </p>

        {/* Email Button */}
        <a
         href="mailto:sunkara260498@gmail.com"
         className="inline-block border border-gray-600 text-gray-200 px-6 py-3 rounded-lg hover:bg-white/10 transition"
        >
        Send Email
        </a>
        {/* Email Text */}
        <p className="text-gray-400 mt-4 text-sm">
          or email directly at <span className="font-medium">sunkara260498@gmail.com</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-gray-300">
          <a
            href="https://www.linkedin.com/in/lavanyasunkara/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/lavanyasunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}