import Image from "next/image";
import ProjectList from "../../components/projects/ProjectList";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
import { Staff } from "../../components/models/Staff";

export default function Projects() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      {/* background (behind content) */}
      <Image
        priority sizes="100vw"
        src="/background/projects-background.png"
        alt="background-image"
        fill className="w-screen h-screen object-cover object-center opacity-25 pointer-events-none" 
      />

      {/* content container: stacks on small screens, side-by-side on md+ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col md:flex-row items-start gap-8">
        {/* LEFT: 3D model (fixed responsive width) */}
        <div className="md:w-96 lg:w-[480px] h-72 md:h-[560px] flex items-center justify-center">
          <RenderModel>
            <Staff />
          </RenderModel>
        </div>

        {/* RIGHT: Project list (grows) */}
        <div className="flex-1">
          <ProjectList projects={projectsData} />
        </div>
      </div>
    </main>
  );
}
