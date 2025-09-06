// app/components/ResponsiveComponent.tsx
"use client";
import React, { ReactNode } from "react";
import useScreenSize from "./hooks/useScreenSize"; // adjust path if needed

type RenderProps = {
  size?: number;
};

type Props = {
  children: (props: RenderProps) => ReactNode;
};

export default function ResponsiveComponent({ children }: Props) {
  const size = useScreenSize();
  // Optionally guard for undefined (before mount)
  return <>{children({ size })}</>;
}
