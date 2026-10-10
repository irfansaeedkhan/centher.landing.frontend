import React from "react";
import Link from "next/link";
import cn from "@/utils/cn";

interface ToggleListProps {
  title: string;
  article_sections: string[];
  path: string;
  activeLink: boolean;
  onLinkClick?: () => void;
}

const ToggleList: React.FC<ToggleListProps> = ({
  title,
  article_sections,
  path,
  activeLink,
  onLinkClick = () => {},
}) => {
  return (
    <div className="flex flex-col gap-3 text-white pl-3">
      <Link
        href={{
          pathname: path,
        }}
        className={cn(
          `text-14px font-semibold cursor-pointer`,
          activeLink ? "active-heading text-gradient" : ""
        )}
        onClick={onLinkClick}
      >
        {title}
      </Link>
      <ul className={cn(`flex flex-col gap-2`, !activeLink && "hidden")}>
        {article_sections.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="text-[13px] text-grayLightV2 font-medium cursor-pointer hover:text-white"
            onClick={onLinkClick}
          >
            <Link href={`${path}#${item.replace(/\s+/g, "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleList;
