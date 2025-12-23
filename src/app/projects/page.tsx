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
      techStack: ["SvelteKit", "TypeScript", "TailwindCSS" ],
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
    <div className="bg-raisin-black min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-medium text-papaya-whip mb-10 tracking-tight">
          projects
        </h1>
        <div className="flex flex-col divide-y divide-wenge/30">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group py-6 first:pt-0 last:pb-0 flex gap-6 items-start"
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-van-dyke">
                <Image
                  src={project.imagePath}
                  alt={project.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-papaya-whip font-medium tracking-tight group-hover:text-champagne-pink transition-colors duration-200">
                  {project.name}
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                </h3>
                <p className="mt-1 text-cinereous text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-chinese-violet"
                    >
                      {tech}{i < project.techStack.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
