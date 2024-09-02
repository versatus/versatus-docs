import React from "react";
import { AppWindow } from "@phosphor-icons/react";

export default function ProblemSolutionIcon({ type, number }) {
  const iconClass =
    type === "solution"
      ? `solution_icon solution_icon_${number}`
      : `problem_icon problem_icon_${number}`;

  if (type === "problem") {
    if (number === 1) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_317)">
            <path
              opacity="0.2"
              d="M6 8.25C7.24264 8.25 8.25 7.24264 8.25 6C8.25 4.75736 7.24264 3.75 6 3.75C4.75736 3.75 3.75 4.75736 3.75 6C3.75 7.24264 4.75736 8.25 6 8.25Z"
              fill="#FF595D"
            />
            <path
              opacity="0.2"
              d="M18 8.25C19.2426 8.25 20.25 7.24264 20.25 6C20.25 4.75736 19.2426 3.75 18 3.75C16.7574 3.75 15.75 4.75736 15.75 6C15.75 7.24264 16.7574 8.25 18 8.25Z"
              fill="#FF595D"
            />
            <path
              d="M6 8.25V10.5C6 10.8978 6.15804 11.2794 6.43934 11.5607C6.72064 11.842 7.10218 12 7.5 12H16.5C16.8978 12 17.2794 11.842 17.5607 11.5607C17.842 11.2794 18 10.8978 18 10.5V8.25"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12V15.75"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 8.25C7.24264 8.25 8.25 7.24264 8.25 6C8.25 4.75736 7.24264 3.75 6 3.75C4.75736 3.75 3.75 4.75736 3.75 6C3.75 7.24264 4.75736 8.25 6 8.25Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 20.25C13.2426 20.25 14.25 19.2426 14.25 18C14.25 16.7574 13.2426 15.75 12 15.75C10.7574 15.75 9.75 16.7574 9.75 18C9.75 19.2426 10.7574 20.25 12 20.25Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 8.25C19.2426 8.25 20.25 7.24264 20.25 6C20.25 4.75736 19.2426 3.75 18 3.75C16.7574 3.75 15.75 4.75736 15.75 6C15.75 7.24264 16.7574 8.25 18 8.25Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_317">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 2) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_341)">
            <path
              opacity="0.2"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              fill="#FF595D"
            />
            <path
              d="M15 9L9 15"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9L15 15"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_341">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 3) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_359)">
            <path
              opacity="0.2"
              d="M16.5 9.06738V11.6249C16.5 13.3124 13.7587 14.7046 10.1747 14.9586C11.4787 15.4527 13.1625 15.7499 15 15.7499C19.1419 15.7499 22.5 14.2386 22.5 12.3749C22.5 10.7418 19.9237 9.38051 16.5 9.06738Z"
              fill="#FF595D"
            />
            <path
              opacity="0.2"
              d="M9 11.25C13.1421 11.25 16.5 9.73896 16.5 7.875C16.5 6.01104 13.1421 4.5 9 4.5C4.85786 4.5 1.5 6.01104 1.5 7.875C1.5 9.73896 4.85786 11.25 9 11.25Z"
              fill="#FF595D"
            />
            <path
              d="M9 11.25C13.1421 11.25 16.5 9.73896 16.5 7.875C16.5 6.01104 13.1421 4.5 9 4.5C4.85786 4.5 1.5 6.01104 1.5 7.875C1.5 9.73896 4.85786 11.25 9 11.25Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 7.875V11.625C1.5 13.4887 4.85812 15 9 15C13.1419 15 16.5 13.4887 16.5 11.625V7.875"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 10.9688V14.7188"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 9.06738C19.9237 9.38051 22.5 10.7418 22.5 12.3749C22.5 14.2386 19.1419 15.7499 15 15.7499C13.1625 15.7499 11.4787 15.4527 10.1747 14.9586"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 14.9325V16.125C7.5 17.9887 10.8581 19.5 15 19.5C19.1419 19.5 22.5 17.9887 22.5 16.125V12.375"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 15.4688V19.2188"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 10.9688V19.2188"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_359">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 4) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_387)">
            <path
              opacity="0.2"
              d="M19.5 13.5H4.5C4.08579 13.5 3.75 13.8358 3.75 14.25V18.75C3.75 19.1642 4.08579 19.5 4.5 19.5H19.5C19.9142 19.5 20.25 19.1642 20.25 18.75V14.25C20.25 13.8358 19.9142 13.5 19.5 13.5Z"
              fill="#FF595D"
            />
            <path
              opacity="0.2"
              d="M19.5 4.5H4.5C4.08579 4.5 3.75 4.83579 3.75 5.25V9.75C3.75 10.1642 4.08579 10.5 4.5 10.5H19.5C19.9142 10.5 20.25 10.1642 20.25 9.75V5.25C20.25 4.83579 19.9142 4.5 19.5 4.5Z"
              fill="#FF595D"
            />
            <path
              d="M19.5 13.5H4.5C4.08579 13.5 3.75 13.8358 3.75 14.25V18.75C3.75 19.1642 4.08579 19.5 4.5 19.5H19.5C19.9142 19.5 20.25 19.1642 20.25 18.75V14.25C20.25 13.8358 19.9142 13.5 19.5 13.5Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 4.5H4.5C4.08579 4.5 3.75 4.83579 3.75 5.25V9.75C3.75 10.1642 4.08579 10.5 4.5 10.5H19.5C19.9142 10.5 20.25 10.1642 20.25 9.75V5.25C20.25 4.83579 19.9142 4.5 19.5 4.5Z"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.875 8.625C17.4963 8.625 18 8.12132 18 7.5C18 6.87868 17.4963 6.375 16.875 6.375C16.2537 6.375 15.75 6.87868 15.75 7.5C15.75 8.12132 16.2537 8.625 16.875 8.625Z"
              fill="#FF595D"
            />
            <path
              d="M16.875 17.625C17.4963 17.625 18 17.1213 18 16.5C18 15.8787 17.4963 15.375 16.875 15.375C16.2537 15.375 15.75 15.8787 15.75 16.5C15.75 17.1213 16.2537 17.625 16.875 17.625Z"
              fill="#FF595D"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_387">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 5) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_409)">
            <path
              opacity="0.2"
              d="M15 4.5C13.5087 4.49995 12.0513 4.94445 10.8139 5.77673C9.57651 6.60901 8.61531 7.79128 8.05311 9.1725V9.16313C7.33175 8.97898 6.57947 8.95037 5.84621 9.07918C5.11294 9.208 4.41546 9.49129 3.80005 9.91027C3.18464 10.3292 2.66538 10.8743 2.27673 11.5093C1.88808 12.1443 1.63892 12.8547 1.54581 13.5934C1.45269 14.332 1.51773 15.082 1.73663 15.7936C1.95552 16.5052 2.32326 17.1621 2.81543 17.7207C3.3076 18.2793 3.91295 18.7268 4.5913 19.0336C5.26965 19.3404 6.00549 19.4993 6.74998 19.5H15C16.9891 19.5 18.8968 18.7098 20.3033 17.3033C21.7098 15.8968 22.5 13.9891 22.5 12C22.5 10.0109 21.7098 8.10322 20.3033 6.6967C18.8968 5.29018 16.9891 4.5 15 4.5Z"
              fill="#FF595D"
            />
            <path
              d="M7.49999 12C7.49999 10.5166 7.93986 9.0666 8.76397 7.83323C9.58808 6.59986 10.7594 5.63856 12.1299 5.07091C13.5003 4.50325 15.0083 4.35472 16.4632 4.64411C17.918 4.9335 19.2544 5.64781 20.3033 6.6967C21.3522 7.7456 22.0665 9.08197 22.3559 10.5368C22.6453 11.9917 22.4967 13.4997 21.9291 14.8701C21.3614 16.2406 20.4001 17.4119 19.1668 18.236C17.9334 19.0601 16.4834 19.5 15 19.5H6.74999C6.00558 19.4991 5.26987 19.3399 4.59169 19.0329C3.91351 18.726 3.30835 18.2783 2.81639 17.7196C2.32442 17.1609 1.95689 16.504 1.73817 15.7925C1.51946 15.0809 1.45457 14.331 1.54781 13.5924C1.64105 12.8539 1.89029 12.1436 2.27899 11.5087C2.66768 10.8738 3.18695 10.3289 3.80233 9.91001C4.41771 9.49114 5.11513 9.20792 5.84832 9.07915C6.58152 8.95038 7.33371 8.97901 8.05499 9.16313"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_409">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 6) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_431)">
            <path
              opacity="0.2"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              fill="#FF595D"
            />
            <path
              d="M15.75 15.75L20.25 20.25"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.25 15.75L15.75 20.25"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21C12 21 8.25 18 8.25 12C8.25 6 12 3 12 3C12 3 15.75 6 15.75 12"
              stroke="#FF595D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_431">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (type === "solution") {
    if (number === 1) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_618)">
            <path
              opacity="0.2"
              d="M18.75 8.25C19.9926 8.25 21 7.24264 21 6C21 4.75736 19.9926 3.75 18.75 3.75C17.5074 3.75 16.5 4.75736 16.5 6C16.5 7.24264 17.5074 8.25 18.75 8.25Z"
              fill="#208F59"
            />
            <path
              d="M7.5 15.75V13.5C7.5 13.1022 7.65804 12.7206 7.93934 12.4393C8.22064 12.158 8.60218 12 9 12H17.25C17.6478 12 18.0294 11.842 18.3107 11.5607C18.592 11.2794 18.75 10.8978 18.75 10.5V8.25"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 8.25V15.75"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 8.25C8.74264 8.25 9.75 7.24264 9.75 6C9.75 4.75736 8.74264 3.75 7.5 3.75C6.25736 3.75 5.25 4.75736 5.25 6C5.25 7.24264 6.25736 8.25 7.5 8.25Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 8.25C19.9926 8.25 21 7.24264 21 6C21 4.75736 19.9926 3.75 18.75 3.75C17.5074 3.75 16.5 4.75736 16.5 6C16.5 7.24264 17.5074 8.25 18.75 8.25Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 20.25C8.74264 20.25 9.75 19.2426 9.75 18C9.75 16.7574 8.74264 15.75 7.5 15.75C6.25736 15.75 5.25 16.7574 5.25 18C5.25 19.2426 6.25736 20.25 7.5 20.25Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_618">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 2) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_640)">
            <path
              opacity="0.2"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              fill="#208F59"
            />
            <path
              d="M8.25 12.75L10.5 15L15.75 9.75"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_640">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 3) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_418_652)">
            <path
              opacity="0.2"
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              fill="#208F59"
            />
            <path
              opacity="0.2"
              d="M22.5 6H18.75C18.9088 6.93686 19.3551 7.80113 20.027 8.47304C20.6989 9.14494 21.5631 9.59121 22.5 9.75V6Z"
              fill="#208F59"
            />
            <path
              opacity="0.2"
              d="M22.5 18V14.25C21.5631 14.4088 20.6989 14.8551 20.027 15.527C19.3551 16.1989 18.9088 17.0631 18.75 18H22.5Z"
              fill="#208F59"
            />
            <path
              opacity="0.2"
              d="M1.5 18V14.25C2.43686 14.4088 3.30113 14.8551 3.97304 15.527C4.64494 16.1989 5.09121 17.0631 5.25 18H1.5Z"
              fill="#208F59"
            />
            <path
              opacity="0.2"
              d="M1.5 6V9.75C2.43686 9.59121 3.30113 9.14494 3.97304 8.47304C4.64494 7.80113 5.09121 6.93686 5.25 6H1.5Z"
              fill="#208F59"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5 6H1.5V18H22.5V6Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5 9.75C21.5631 9.59121 20.6989 9.14494 20.027 8.47304C19.3551 7.80113 18.9088 6.93686 18.75 6"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 18C18.9088 17.0631 19.3551 16.1989 20.027 15.527C20.6989 14.8551 21.5631 14.4088 22.5 14.25"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 14.25C2.43686 14.4088 3.30113 14.8551 3.97304 15.527C4.64494 16.1989 5.09121 17.0631 5.25 18"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.25 6C5.09121 6.93686 4.64494 7.80113 3.97304 8.47304C3.30113 9.14494 2.43686 9.59121 1.5 9.75"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_652">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 4) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_421_665)">
            <path
              opacity="0.2"
              d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25ZM12 15.75C11.2583 15.75 10.5333 15.5301 9.91661 15.118C9.29993 14.706 8.81928 14.1203 8.53545 13.4351C8.25162 12.7498 8.17736 11.9958 8.32205 11.2684C8.46675 10.541 8.8239 9.8728 9.34835 9.34835C9.8728 8.8239 10.541 8.46675 11.2684 8.32205C11.9958 8.17736 12.7498 8.25162 13.4351 8.53545C14.1203 8.81928 14.706 9.29993 15.118 9.91661C15.5301 10.5333 15.75 11.2583 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75Z"
              fill="#208F59"
            />
            <path
              d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_421_665">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 5) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_421_670)">
            <path
              opacity="0.2"
              d="M12 12C16.5563 12 20.25 9.98528 20.25 7.5C20.25 5.01472 16.5563 3 12 3C7.44365 3 3.75 5.01472 3.75 7.5C3.75 9.98528 7.44365 12 12 12Z"
              fill="#208F59"
            />
            <path
              d="M12 12C16.5563 12 20.25 9.98528 20.25 7.5C20.25 5.01472 16.5563 3 12 3C7.44365 3 3.75 5.01472 3.75 7.5C3.75 9.98528 7.44365 12 12 12Z"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 7.5V12C3.75 14.4853 7.44375 16.5 12 16.5C16.5562 16.5 20.25 14.4853 20.25 12V7.5"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 12V16.5C3.75 18.9853 7.44375 21 12 21C16.5562 21 20.25 18.9853 20.25 16.5V12"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_421_670">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    } else if (number === 6) {
      return <AppWindow size={24} className={iconClass} color="#208f59" />;
    } else if (number === 7) {
      return (
        <svg
          className={iconClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_422_676)">
            <path
              opacity="0.2"
              d="M12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25Z"
              fill="#208F59"
            />
            <path
              d="M15.75 9H20.25V4.5"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.25 9.00013L17.5988 6.34888C16.0633 4.81353 13.9846 3.94539 11.8132 3.93276C9.64193 3.92012 7.55317 4.764 6 6.28138"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.25 15H3.75V19.5"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 15L6.40125 17.6512C7.93666 19.1866 10.0154 20.0547 12.1868 20.0674C14.3581 20.08 16.4468 19.2361 18 17.7188"
              stroke="#208F59"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_422_676">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  }
}
