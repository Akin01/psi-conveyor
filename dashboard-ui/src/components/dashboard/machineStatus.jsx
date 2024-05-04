import {
  faCircleExclamation,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";

const MachineStatusCard = ({ isLeak }) => {
  return (
    <div className="w-5/6 h-5/6 bg-[#526D82] flex flex-col gap-7 justify-center items-center rounded-md">
      <div className="text-white text-2xl font-bold font-mono">Status</div>
      {isLeak ? (
        <FontAwesomeIcon
          size="5x"
          className="drop-shadow-md text-red-600"
          icon={faCircleExclamation}
          beatFade
        />
      ) : (
        <FontAwesomeIcon
          color="white"
          size="5x"
          className="drop-shadow-md text-green-600"
          icon={faShield}
        />
      )}
      <div
        className={`text-white text-sm font-semibold font-mono py-1 px-2 rounded-lg drop-shadow-md ${
          isLeak ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {isLeak ? "Ada" : "Tidak Ada"} Kebocoran
      </div>
    </div>
  );
};

MachineStatusCard.propTypes = {
  isLeak: PropType.bool.isRequired,
};

export default MachineStatusCard;
