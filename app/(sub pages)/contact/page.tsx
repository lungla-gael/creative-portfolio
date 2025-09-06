"use client"
import ContactForm from "@/app/components/contact/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Image
        priority sizes="100vw"
        src="/background/contact-background.png"
        alt="background-image"
        fill className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" 
      />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
            <h1 className="text-[rgb(var(--accent))] font-semibold text-center text-4xl capitalize">
                Summon the Wizard
            </h1>
            <p className="font-light">
                {"Summon Me Whether you're a fellow developer, a curious client, or a wandering soul drawn to the glow of animated glassmorphism, you've arrived at the right portal I'm a full-stack sorcerer specializing in React, Next.js, TypeScript,Javascript and Python. My spellbook is filled with modular incantations, animated scroll rituals, and UI enchantments that shimmer with precision. From firefly backgrounds to Three.js familiars, I conjure interfaces that move, breathe, and respond."}
            </p>
        </div>
        <ContactForm />
      </article>
    </>
  );
}
