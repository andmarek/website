export interface ProjectInfo {
  name: string;
  imagePath: string;
  description: string;
  techStack: string[];
  link: string;
}

export const projects: ProjectInfo[] = [
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
    description:
      "A game where you guess who added the song to a collaborative Spotify playlist",
    techStack: ["NextJs", "TypeScript", "TailwindCSS"],
    link: "https://github.com/andmarek/who-added-the-song",
  },
  {
    name: "RetroRover",
    imagePath: "/retro-rover.png",
    description:
      "A free and open-source retroboard for teams to use to help with collaboration and reflection.",
    techStack: ["Next.js", "TypeScript", "DynamoDB", "SocketIO"],
    link: "https://github.com/andmarek/expf",
  },
  {
    name: "pacequick.com",
    imagePath: "/pacequick-screen.png",
    description: "A running utility to calcuate paces, quickly.",
    techStack: ["Sveltekit", "AWS"],
    link: "https://pacequick.com",
  },
  {
    name: "Auto-Commit-Message",
    imagePath: "/automessage.png",
    description: "A CLI tool to generate a commit message based on the Git diff.",
    techStack: ["Rust"],
    link: "https://github.com/andmarek/auto-commit-message",
  },
  {
    name: "sshell",
    imagePath: "/neofetch.png",
    description: "A simple shell written in C.",
    techStack: ["C"],
    link: "https://github.com/andmarek/sshell",
  },
  {
    name: "VimSweep",
    imagePath: "/vim_sweep.png",
    description: "A vim-inspired minesweeper clone.",
    techStack: ["C++"],
    link: "https://github.com/andmarek/Vim-Sweep",
  },
];


