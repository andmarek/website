import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";


export default function Projects(): React.JSX.Element {
  return (
    <div className="bg-raisin-black">
      <div className="min-h-screen font-sans max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-champagne-pink hover:text-papaya-whip transition-colors text-3xl font-bold mb-10">projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors shadow-xl"
            >
              <Image
                className="w-full h-48 object-cover"
                src={project.imagePath}
                alt={project.name}
                width={"300"}
                height={"300"}
              />
              <div className="p-5">
                <Link href={project.link} className="hover:text-papaya-whip transition-colors text-champagne-pink text-xl font-semibold">{project.name}</Link>
                <p className="text-sm mt-2 text-champagne-pink/90">{project.description}</p>
                <div className="mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-chinese-violet/40 hover:bg-plum/50 transition-colors rounded-full px-3 py-1 text-xs font-medium text-papaya-whip mr-2 mb-2"
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
