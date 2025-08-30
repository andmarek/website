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
    <div className="bg-raisin-black">
      <div className="min-h-screen container mx-auto px-6 py-14 bg-raisin-black">
        <h2 className="text-champagne-pink hover:text-papaya-whip transition-colors duration-300 text-4xl font-bold mb-12 tracking-tight font-sans">
          projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block focus:outline-none"
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {/* gradient border wrapper */}
              <div className="p-[1px] rounded-xl bg-gradient-to-br from-plum via-chinese-violet to-moss-green transition-transform duration-300 group-hover:-translate-y-1">
                {/* card */}
                <div className="rounded-[10px] overflow-hidden bg-van-dyke/80 backdrop-blur-sm">
                  {/* image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.imagePath}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* subtle overlay on hover */}
                    <div className="absolute inset-0 bg-[#00000066] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* top-right tag */}
                    <div className="absolute top-3 right-3 rounded-full bg-raisin-black/70 px-3 py-1 text-xs text-papaya-whip">
                      view project
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-5">
                    <h3 className="text-papaya-whip text-lg font-semibold tracking-tight group-hover:drop-shadow-glow">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-champagne-pink/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-chinese-violet/80 hover:bg-plum transition-colors duration-300 px-3 py-1 text-xs font-medium text-papaya-whip"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
