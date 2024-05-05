import {
  faCloud,
  faRotate,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { XCircleIcon } from "@heroicons/react/24/outline";
import PropType from "prop-types";

const ConnectionStatus = ({ status }) => {
  if (status === "connected") {
    return (
      <div className="flex gap-3 justify-start items-center">
        <FontAwesomeIcon icon={faCloud} className="text-green-600 w-6" />
        <div className="px-2 py-1 bg-green-600 text-white text-base rounded-lg">
          {status}
        </div>
      </div>
    );
  } else if (status === "reconnecting") {
    return (
      <div className="flex gap-3 justify-start items-center">
        <FontAwesomeIcon icon={faRotate} spin className="text-yellow-600 w-6" />
        <div className="px-2 py-1 bg-yellow-600 text-white text-base rounded-lg">
          {status}
        </div>
      </div>
    );
  } else if (status === "connecting") {
    return (
      <div className="flex gap-3 justify-start items-center">
        <FontAwesomeIcon
          icon={faSatelliteDish}
          fade
          className="text-[#576CBC] w-6"
        />
        <div className="px-2 py-1 bg-[#576CBC] text-white text-base rounded-lg">
          {status}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 justify-start items-center">
        <XCircleIcon className="text-red-600 w-6" />
        <div className="px-2 py-1 bg-red-600 text-white text-base rounded-lg">
          {status}
        </div>
      </div>
    );
  }
};

ConnectionStatus.propTypes = {
  status: PropType.string.isRequired,
};

export default ConnectionStatus;
