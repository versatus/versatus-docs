import React from "react";
import {
  AppWindow,
  GitFork,
  XCircle,
  Coins,
  Cloud,
  GlobeSimpleX,
  HardDrives,
  GitBranch,
  CheckCircle,
  Money,
  Database,
  ArrowsClockwise,
  Eye,
} from "@phosphor-icons/react";

export default function ProblemSolutionIcon({ type, number }) {
  const iconClass =
    type === "solution"
      ? `solution_icon solution_icon_${number}`
      : `problem_icon problem_icon_${number}`;

  if (type === "problem") {
    if (number === 1) {
      return (
        <GitFork
          size={24}
          weight="duotone"
          className={iconClass}
          color="#FF595D"
        />
      );
    } else if (number === 2) {
      return (
        <XCircle
          size={24}
          weight="duotone"
          className={iconClass}
          color="#FF595D"
        />
      );
    } else if (number === 3) {
      return (
        <Coins
          size={24}
          weight="duotone"
          className={iconClass}
          color="#FF595D"
        />
      );
    } else if (number === 4) {
      return (
        <HardDrives
          size={24}
          weight="duotone"
          className={iconClass}
          color="#FF595D"
        />
      );
    } else if (number === 5) {
      return (
        <Cloud
          size={24}
          weight="duotone"
          className={iconClass}
          color="#FF595D"
        />
      );
    } else if (number === 6) {
      return (
        <GlobeSimpleX
          size={24}
          weight="duotone"
          className={iconClass}
          color="#FF595D"
        />
      );
    }
  } else if (type === "solution") {
    if (number === 1) {
      return (
        <GitBranch
          size={24}
          weight="duotone"
          className={iconClass}
          color="#208f59"
        />
      );
    } else if (number === 2) {
      return (
        <CheckCircle
          size={24}
          weight="duotone"
          className={iconClass}
          color="#208f59"
        />
      );
    } else if (number === 3) {
      return (
        <Money
          size={24}
          weight="duotone"
          className={iconClass}
          color="#208f59"
        />
      );
    } else if (number === 4) {
      return (
        <Eye size={24} weight="duotone" className={iconClass} color="#208f59" />
      );
    } else if (number === 5) {
      return (
        <Database
          size={24}
          weight="duotone"
          className={iconClass}
          color="#208f59"
        />
      );
    } else if (number === 6) {
      return (
        <AppWindow
          size={24}
          weight="duotone"
          className={iconClass}
          color="#208f59"
        />
      );
    } else if (number === 7) {
      return (
        <ArrowsClockwise
          size={24}
          weight="duotone"
          className={iconClass}
          color="#208f59"
        />
      );
    }
  }
}
