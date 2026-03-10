export default function Projects() {
  const projects = [
    
    {
      title: "Weather Search using Pydantic AI",
      description:
        "Built a full-stack weather search app using Streamlit and PydanticAI. Integrated OpenWeatherMap API to fetch real-time weather data with schema-validated outputs.",
      tech: "Streamlit, PydanticAI, OpenWeatherMap API",
      link: "https://findweather.streamlit.app/",
    },
    {
      title: "Web Research & Summarizer (CrewAI)",
      description:
        "Created a multi-agent research system using CrewAI with a Web Researcher agent and Summarizer agent, along with an interactive Streamlit interface.",
      tech: "CrewAI, Streamlit",
      link: "https://web-researchagent.streamlit.app/",
    },
    {
      title: "Stock Analysis Multi-Agent App",
      description:
        "Developed a stock analysis system where AI agents (Financial Analyst and Strategic Trader) collaborate using real-time market data.",
      tech: "Python, CrewAI, Groq, Llama-3.3-70B, yfinance, Streamlit",
      link: "https://stcockanalysisusingcrewai.streamlit.app/",
    },
    {
      title: "Document Question Answering (RAG)",
      description:
        "Built a Retrieval-Augmented Generation system allowing users to upload documents, generate embeddings, and retrieve relevant answers.",
      tech: "Python, LangChain, Streamlit",
      link: "https://simpleragapp.streamlit.app/",
    },
    {
      title: "Cold Email Generator",
      description:
        "AI system that analyzes resumes and job descriptions to generate personalized recruiter outreach emails.",
      tech: "Groq Cloud, Llama-3.1-8B-Instant, LangChain, Streamlit",
      link: "https://github.com/lavanyasunkara/ColdEmailGenerator",
    },
    {
      title: "Coder Buddy – AI App Generator",
      description:
        "Built an autonomous AI system that converts natural language prompts into fully functional software projects using agent workflows.",
      tech: "LangChain, LangGraph, Groq Cloud, gpt-oss",
      link: "https://github.com/lavanyasunkara/Coder-Buddy",
    },
    {
      title: "Multiple Model Chatbot",
      description:
        "Developed a flexible chatbot allowing users to switch between LLM providers such as OpenAI, Groq, Ollama, and Gemini.",
      tech: "OpenAI, Groq, Ollama, Gemini",
      link: "https://multiplemodelchatbot.streamlit.app/",
    },
    {
      title: "ChatGPT Clone",
      description:
        "Developed and deployed a GPT-like chatbot on AWS using Docker, Ollama, and MongoDB with persistent chat memory. Enabled self-hosted LLM inference and session-based conversation retrieval.",
      tech: "Python, Streamlit, Docker, AWS EC2, Ollama, MongoDB",
      link: "http://54.164.48.200:8501/",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <p className="text-sm text-gray-500">
              <span className="font-medium">Tech:</span> {project.tech}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}