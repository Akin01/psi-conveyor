import { faCloud, faRotate, faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  XCircleIcon,
} from "@heroicons/react/24/outline";
import PropType from "prop-types";

const ConnectionStatus = ({ status }) => {
  if (status === "connected") {
    return (
      <>
        <FontAwesomeIcon icon={faCloud} className="text-green-600 w-6" />
        <div className="px-2 py-1 bg-green-600 text-white text-base rounded-lg">
          {status}
        </div>
      </>
    );
  } else if (status === "reconnecting") {
    return (
      <>
        <FontAwesomeIcon icon={faRotate} spin className="text-yellow-600 w-6" />
        <div className="px-2 py-1 bg-yellow-600 text-white text-base rounded-lg">
          {status}
        </div>
      </>
    );
  } else if (status === "connecting") {
    return (
      <>
        <FontAwesomeIcon icon={faSatelliteDish} fade className="text-[#576CBC] w-6" />
        <div className="px-2 py-1 bg-[#576CBC] text-white text-base rounded-lg">
          {status}
        </div>
      </>
    );
  } else {
    return (
      <>
        <XCircleIcon className="text-red-600 w-6" />
        <div className="px-2 py-1 bg-red-600 text-white text-base rounded-lg">
          {status}
        </div>
      </>
    );
  }
};

ConnectionStatus.propTypes = {
  status: PropType.string.isRequired,
};

export default ConnectionStatus;
