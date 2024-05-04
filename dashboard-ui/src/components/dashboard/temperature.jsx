import { faTemperature0 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react/dist/iconify.js";
import PropType from "prop-types";

const TemperatureCard = ({ value }) => {
  return (
    <div className="w-2/5 h-5/6 flex flex-col gap-3 items-center justify-center bg-[#526D82] rounded-md">
      <FontAwesomeIcon
        color="white"
        size="3x"
        icon={faTemperature0}
        className="-ml-60"
      />
      <div className="flex justify-center items-center">
        <div className="text-white text-8xl">{value}</div>
        <Icon color="white" icon="wi:celsius" width="6rem" height="6rem" className="-mt-10"/>
      </div>
      <div className="text-white text-sm ml-40">*Room Temperature</div>
    </div>
  );
};

TemperatureCard.propTypes = {
  value: PropType.number.isRequired,
};

export default TemperatureCard;
