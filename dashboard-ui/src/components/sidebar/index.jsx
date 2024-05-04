import { useState } from "react";
import { Link } from "react-router-dom";
import {
  XMarkIcon,
  Bars4Icon,
  PresentationChartBarIcon,
  DocumentChartBarIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const tabMenu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <PresentationChartBarIcon className="w-6" />,
  },
  {
    name: "Report",
    path: "/report",
    icon: <DocumentChartBarIcon className="w-6" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <InformationCircleIcon className="w-6" />,
  },
];

const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(false);
  const onNavExpand = () => setIsExpand(!isExpand);

  return (
    <div
      className={`h-screen max-h-fit flex flex-col gap-y-14 bg-[#27374D] p-4 ${
        isExpand
          ? ` w-[16rem] items-start`
          : "w-13 items-center"
      }`}
    >
      <div className="p-2 mt-3">
        {!isExpand ? (
          <Bars4Icon
            className="w-6 text-white cursor-pointer"
            onClick={onNavExpand}
          />
        ) : (
          <XMarkIcon
            className="w-6 text-white cursor-pointer"
            onClick={onNavExpand}
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        {tabMenu.map((e) => {
          return (
            <Link to={e.path} key={e.name}>
              <div className="text-white text-base flex gap-x-3 p-2 hover:bg-[#526D82] rounded-md">
                {e.icon}
                <span className={!isExpand ? "hidden" : ""}>{e.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
