import Image from "next/image";
import RenderModel from "./components/RenderModel";
import Wizard from "./components/models/Wizard";
import Navigation from "./components/navigation/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between relative">
      <Image priority sizes="100vw" src="/background/home-background.png" alt="background-image" 
      fill className="w-screen h-screen object-cover object-center opacity-25" 
      />

        <div className="w-screen h-screen">
          {/* Navigation and 3D Models */}
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
    </main>
  );
}
