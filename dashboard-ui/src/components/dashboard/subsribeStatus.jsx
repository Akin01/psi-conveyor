import {
  faHandshake,
  faHandshakeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";

const SubscribeStatus = ({ isSubscribe }) => {
  if (isSubscribe) {
    return (
      <>
        <FontAwesomeIcon icon={faHandshake} className="text-green-600 w-6" />
        <div className="px-2 py-1 bg-green-600 text-white text-base rounded-lg">
          subscribed
        </div>
      </>
    );
  } else {
    return (
      <>
        <FontAwesomeIcon
          icon={faHandshakeSlash}
          className="text-[#27374D] w-6"
        />
        <div className="px-2 py-1 bg-[#27374D] text-white text-base rounded-lg">
          unsubscribed
        </div>
      </>
    );
  }
};

SubscribeStatus.propTypes = {
  isSubscribe: PropType.bool.isRequired,
};

export default SubscribeStatus;
