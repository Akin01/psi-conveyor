import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import PropType from "prop-types";

const LpgGasCard = ({ value }) => {
  return (
    <div className="w-2/5 h-5/6 bg-[#526D82] rounded-md flex flex-col gap-2 justify-center items-center">
      <Icon
        icon="mdi:gas-cylinder"
        width="3.75rem"
        height="3.75rem"
        color="white"
        className="-ml-60"
      />
      <div className="flex justify-center items-center gap-2">
        <div className="text-white text-8xl">{value}</div>
        <div className="text-white -mt-16">LPG</div>
      </div>
      <div className="text-white text-sm ml-48">*Total of Gas</div>
    </div>
  );
};

LpgGasCard.propTypes = {
  value: PropType.number.isRequired,
};

export default LpgGasCard;
