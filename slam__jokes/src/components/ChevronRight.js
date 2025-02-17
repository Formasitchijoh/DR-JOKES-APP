import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ChevronRight = (props) => {
  return (
    <>
      {/* chevron right // next joke Indicator */}
      <div
        className={`dark:text-slate-400 arrow__indicator right mt-2 md:absolute -right-[1%] top-[50%] lg:absolute right-[5%] top-[45%]`}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`cursor-pointer text-2xl`}
          onClick={props.nextJoke}
        />
      </div>
    </>
  );
};

export default ChevronRight;
