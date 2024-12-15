import Image from "next/image";
import Link from "next/link";
interface IProject {
  name: string;
  imagePath: string;
  description: string;
  techStack: string[];
  link: string;
}

interface ProjectTileProps {
  project: IProject;
}


export default function Projects(): React.JSX.Element {
  const projects = [
    {
      name: "Capitol Hill Running Club",
      imagePath: "/chrc-website.png",
      description: "A homepage for the Capitol Hill Running Club.",
      techStack: ["SvelteKit", "TypeScript", "TailwindCSS", "Vercel"],
      link: "https://caphillrunclub.com",
    },
    {
      name: "Who Added the Song",
      imagePath: "/who-added-the-song.png",
      description: "A game where you guess who added the song to a collaborative Spotify playlist",
      techStack: ["NextJs", "TypeScript", "TailwindCSS"],
      link: "https://github.com/andmarek/who-added-the-song",
    },
    {
      name: "RetroRover",
      imagePath: "/retro-rover.png",
      description: "A free and open-source retroboard for teams to use to help with collaboration and reflection.",
      techStack: ["Next.js", "TypeScript", "DynamoDB", "SocketIO"],
      link: "https://github.com/andmarek/expf"
    },
    {
      name: "pacequick.com",
      imagePath: "/pacequick-screen.png",
      description: "A running utility to calcuate paces, quickly.",
      techStack: ["Sveltekit", "AWS"],
      link: "https://pacequick.com"
    },
    {
      name: "Auto-Commit-Message",
      imagePath: "/automessage.png",
      description: "A CLI tool to generate a commit message based on the Git diff.",
      techStack: ["Rust"],
      link: "https://github.com/andmarek/auto-commit-message"
    },
    {
      name: "sshell",
      imagePath: "/neofetch.png",
      description: "A simple shell written in C.",
      techStack: ["C"],
      link: "https://github.com/andmarek/sshell"
    },
    {
      name: "VimSweep",
      imagePath: "/vim_sweep.png",
      description: "A vim-inspired minesweeper clone.",
      techStack: ["C++"],
      link: "https://github.com/andmarek/Vim-Sweep"
    },

  ];
  return (
    <div className="bg-raisin-black">
      <div className="min-h-screen text-mono container mx-auto p-10 bg-raisin-black">
        <h2 className="text-champagne-pink hover:text-papaya-whip transition-all duration-300 text-3xl font-bold mb-10 font-sans">projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-van-dyke rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            >
              <Image
                className="w-full h-48 object-cover"
                src={project.imagePath}
                alt={project.name}
                width={"300"}
                height={"300"}
              />
              <div className="p-6 hover:bg-wenge transition-all duration-1000">
                <Link href={project.link} className="hover:text-papaya-whip transition-all duration-300 text-champagne-pink text-xl font-semibold">{project.name}</Link>
                <p className="text-sm mt-2">{project.description}</p>
                <div className="mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-chinese-violet hover:bg-plum transition-all duration-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
