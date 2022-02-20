import React from "react";

export type BackProps = {
  className?: string;
};

const Back: React.FC<BackProps> = (props) => {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M12.6673 5.5H3.33398"
        stroke="#006E72"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00065 8.70842L3.33398 5.50008L8.00065 2.29175"
        stroke="#006E72"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Back;
