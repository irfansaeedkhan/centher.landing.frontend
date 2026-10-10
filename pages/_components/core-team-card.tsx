import React from "react";
import Image from "next/image";
import { Bullet, RightArrow } from "@/components/svgCollection";

interface Props {
  item: {
    name: string;
    role: string;
    profile_picture: string;
    social_media: string;
    social_media_link: string;
    social_media_icon: React.FC<React.SVGProps<SVGSVGElement>>;
    properties: {
      property: string;
    }[];
  };
}

const CoreTeamCard = ({ item }: Props) => {
  return (
    <div className="teamCard relative z-20 rounded-3xl overflow-hidden bg-elevationDark bg-cardNoise w-[100%] min-w-[100%] h-[520px] mdTab:w-[530px] mdTab:h-[450px] shadow-card  mdTab:min-w-[530px] ml-[4%]">
      <div className="top flex items-center gap-5">
        <Image
          src={item.profile_picture}
          alt="team member"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-cover"
        />
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-20px font-semibold text-white">{item.name}</h4>
          <h5 className="text-17px font-medium text-[#B7BBCC]">{item.role}</h5>
        </div>
      </div>
      <div className="list border-t border-anchor p-7">
        <ul className=" text-left flex flex-col gap-4">
          {item.properties.map((prop, i) => (
            <li
              className="flex items-center gap-4 txt-17px font-medium  text-offWhite"
              key={i}
            >
              <div className="w-7">
                <Bullet />
              </div>
              {prop.property}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={item.social_media_link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="absolute bottom-0 w-full flex items-center justify-between  border-t border-anchor p-7">
          <div className="flex items-start gap-5">
            <item.social_media_icon />
            <h6 className="txt-17px font-medium  text-offWhite">
              {item.social_media}
            </h6>
          </div>
          <button>
            <RightArrow />
          </button>
        </div>
      </a>
    </div>
  );
};

export default CoreTeamCard;
