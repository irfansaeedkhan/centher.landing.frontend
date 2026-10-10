import React from "react";

interface Prop {
  className?: string;
}
const AnimatedBox = ({ className }: Prop) => {
  return (
    <div className={className}>
      <div className="animationBox w-40 h-[37px] relative">
        <div className="box bg-themeDark absolute w-[24px] h-[21px] top-[-1px] left-[17px] "></div>
        <div className="box bg-themeDark absolute w-[21px] h-[25px]  top-[17px] left-[-1px] "></div>
        <div className="box bg-themeDark absolute w-[123px] h-[25px] top-[17px] right-[-1px] "></div>
      </div>
    </div>
  );
};

export default AnimatedBox;
