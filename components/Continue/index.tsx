import React from "react";

export type ContinueProps = {
  className?: string;
};

const Continue: React.FC<ContinueProps> = (props) => {
  return (
    <svg
      width="9"
      height="13"
      viewBox="0 0 9 13"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="m7.713 7.49-5.252 5.076a.876.876 0 0 1-1.21 0 .807.807 0 0 1 0-1.169l4.648-4.492L1.25 2.412a.808.808 0 0 1 0-1.17.876.876 0 0 1 1.21 0L7.714 6.32a.81.81 0 0 1 0 1.17Z"
        fill="#00D0BE"
        stroke="#006E72"
        strokeWidth=".076"
        strokeMiterlimit="22.926"
      />
    </svg>
  );
};

export default Continue;
