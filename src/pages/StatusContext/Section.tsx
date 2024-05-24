import React from "react";
import { LevelContext } from "./LevelContext";
import './index.scss'
export default function Section({
  level,
  children,
}: {
  level: number;
  children: React.ReactNode;
}) {
  return (
    <LevelContext.Provider value={level}>
      <section className="section">{children}</section>
    </LevelContext.Provider>
  );
}
