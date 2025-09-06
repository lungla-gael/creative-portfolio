"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  onclose?: () => void;
  toggle?: () => void;
};

const Modal: React.FC<ModalProps> = ({ onclose, toggle }) => {
  if (typeof window === "undefined") return null;
  const root = document.getElementById("my-modal");
  if (!root) return null;

  return createPortal(
    <div className="fixed inset-0 bg-[rgb(var(--background))]/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-[rgb(var(--background))]/20 border border-[rgb(var(--accent))]/30 border-solid backdrop-blur-[6px]
                py-8 px-6 sm:px-16 rounded text-center space-y-8"
      >
        <p className="font-light">Do you want to play the background music?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-[rgb(var(--accent))]/30 border-solid rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={onclose}
            className="px-4 py-2 border border-[rgb(var(--accent))]/30 border-solid rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    root
  );
};

const Sound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Single effect to decide whether to attach deferred-play handlers or show modal
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    // Handler that will be attached to the first user interaction when consent === "true"
    const handler = () => {
      const audio = audioRef.current;
      if (!audio) return;

      // Attempt to play as a result of a genuine user interaction
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // Play rejected (should be rare because this runs on a user gesture)
          console.warn("Deferred play failed:", err);
          setIsPlaying(false);
        });

      // Remove listeners after first interaction
      ["click", "keydown", "touchstart"].forEach((ev) =>
        document.removeEventListener(ev, handler)
      );
    };

    if (consent === "true" && consentTime && 
        new Date(consentTime).getTime() + 3*24*60*60*1000 > new Date().getTime()
    ) {
      // If user previously consented, wait for first user interaction to play
      ["click", "keydown", "touchstart"].forEach((ev) =>
        document.addEventListener(ev, handler)
      );
      // don't open the modal in this case
      setShowModal(false);
    } else {
      // No consent stored: show the modal so the user can opt-in (clicking Yes will call toggle)
      setShowModal(true);
    }

    // cleanup
    return () =>
      ["click", "keydown", "touchstart"].forEach((ev) =>
        document.removeEventListener(ev, handler)
      );
  }, []);

  // Toggle called from genuine user gestures (modal Yes button or main toggle button)
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      // ensure modal is closed even if audio missing
      setShowModal(false);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem("musicConsent", "false");
      localStorage.setItem("consentTime", new Date().toISOString());
    } else {
      try {
        await audio.play(); // this is called from a user gesture (button click), so browser should allow it
        setIsPlaying(true);
        localStorage.setItem("musicConsent", "true");
        localStorage.setItem("consentTime", new Date().toISOString());
      } catch (err) {
        // Play failed even on user gesture — fallback gracefully
        console.error("Audio play failed:", err);
        setIsPlaying(false);
        localStorage.setItem("musicConsent", "false");        
        localStorage.setItem("consentTime", new Date().toISOString());
      }
    }
    setShowModal(false);
  };

  const baseShadow = "inset 0 17px 5px -9px rgba(254,254,91,0.05)";
  const hoverShadow = "5px 5px 20px 0px rgba(254,254,91,0.3)";

  return (
    <>
      <div className="fixed top-4 right-2.5 z-50 group">
        {showModal && <Modal onclose={() => setShowModal(false)} toggle={toggle} />}

        <audio ref={audioRef} loop>
          <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
          your browser does not support the audio element
        </audio>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          onClick={toggle}
          aria-label="sound"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={clsx(
            "text-[rgb(var(--foreground))] group rounded-full flex items-center justify-center cursor-pointer z-50",
            "bg-[rgb(var(--background))]/20 border border-[rgb(var(--accent))]/30 border-solid backdrop-blur-[6px]",
            "fixed top-4 right-4 w-10 h-10 p-2.5"
          )}
          style={{
            boxShadow: hovered ? `${baseShadow}, ${hoverShadow}` : baseShadow,
            transition: "box-shadow 0.3s ease",
          }}
        >
          {isPlaying ? (
            <Volume2
              className="w-full h-full text-foreground group-hover:text-[rgb(var(--accent))]"
              strokeWidth={1.5}
            />
          ) : (
            <VolumeX
              className="w-full h-full text-foreground group-hover:text-[rgb(var(--accent))]"
              strokeWidth={1.5}
            />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default Sound;
