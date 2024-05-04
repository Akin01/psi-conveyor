import { faCircleStop, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types"

const ProcessStatusCard = ({ isStop }) => {
  return (
    <div className="w-5/6 h-5/6 bg-[#526D82] flex flex-col gap-6 justify-center items-center rounded-md">
      <div className="text-white text-2xl font-bold font-mono">Process</div>
      <div className={"text-7xl text-white drop-shadow-md"}>
        {isStop ? (
          <FontAwesomeIcon icon={faCircleStop} className="text-red-600" />
        ) : (
          <FontAwesomeIcon icon={faRotate} spin className="text-green-600" />
        )}
      </div>
      <div
        className={`text-white text-md font-mono py-1 px-3 ${
          isStop ? "bg-red-600" : "bg-green-600"
        } font-semibold rounded-lg drop-shadow-md`}
      >
        {isStop ? "Stop" : "Running"}
      </div>
    </div>
  );
};

ProcessStatusCard.propTypes = {
    isStop: PropType.bool.isRequired
}

export default ProcessStatusCard;
