export default function About() {
  const skills = [
    { title: "Programming", items: "Python, Java, React, HTML, CSS" },
    { title: "GenAI Frameworks", items: "LangChain, LlamaIndex, OpenAI APIs, vLLM" },
    { title: "Agent Frameworks", items: "LangGraph, CrewAI, PydanticAI, Autogen" },
    { title: "Cloud & Deployment", items: "AWS, Docker, CI/CD" },
    { title: "Databases", items: "PostgreSQL, MongoDB, MySQL, ChromaDB" },
    { title: "Tools", items: "Git, n8n" },
  ];

  return (
    <div className="p-10">

      {/* Intro */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>

        <p className="text-gray-400">
          AI-focused Computer Science master’s student with 4 years of industry
          experience in backend systems, enterprise automation, and
          customer-focused delivery. I build and deploy Generative AI and LLM
          applications using modern frameworks and cloud infrastructure,
          focusing on RAG systems, agent architectures, and AI-powered tools.
        </p>
      </div>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Areas of Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.items}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Professional Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        <div className="border border-gray-700 rounded-xl p-6 shadow-lg md:col-span-3 hover:scale-[1.01] transition">
          <h3 className="font-semibold">System Administrator</h3>

          <p className="text-gray-400 text-sm mb-3">
            Tata Consultancy Services • Aug 2019 – Dec 2023
          </p>

          <ul className="text-gray-400 text-base space-y-1 list-disc pl-4">
            <li>Administered and maintained Automic UC4 scheduling environment across Development, QA, and Production landscapes.</li>
            <li>Monitored daily batch workflows and ensured timely execution of enterprise job schedules with minimal SLA breaches.</li>
            <li>Designed, created, modified, and deployed Automic jobs, workflows, calendars, and dependencies across Test → QA → Production environments.</li>
            <li>Performed Automic administrative activities including user management, client configuration, object transport, and environment promotion.</li>
            <li>Led end-to-end production server upgrades across Linux, Windows, and Ubuntu platforms ensuring zero critical downtime.</li>
            <li>Awarded TCS Contextual Master Award for successfully managing a large-scale production server upgrade.</li>
            <li>Conducted system health checks, agent monitoring, and log analysis to proactively identify and resolve failures.</li>
            <li>Managed Automic agent installation, configuration, and upgrades across distributed environments.</li>
            <li>Collaborated with infrastructure and application teams to onboard new applications into Automic scheduling ecosystem.</li>
            <li>Mentored junior team members on Automic job design standards and troubleshooting.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Education
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border border-gray-700 rounded-xl p-6 shadow-lg md:col-span-3 hover:scale-[1.01] transition">
          <h3 className="font-semibold">MS Computer Science</h3>

          <p className="text-gray-400 text-base">
            New Jersey Institute of Technology
          </p>

          <p className="text-gray-500 text-base mt-1">
            GPA: 3.65 / 4.0
          </p>
        </div>
      </div>

    </div>
  );
}