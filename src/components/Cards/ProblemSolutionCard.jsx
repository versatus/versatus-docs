import React from "react";
import ProblemSolutionIcon from "./ProblemSolutionIcon";

export default function ProblemSolutionCard({ title, icon, children }) {
  return (
    <div className="problem_solution_card">
      <ProblemSolutionIcon type={icon.type} number={icon.number} />
      <div className="ps_card_content">
        <h2>{title}</h2>
        <div className="ps_card_children">{children}</div>
      </div>
    </div>
  );
}
