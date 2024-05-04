import { faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";

const SampleNumberCard = (props) => {
  const { mass, lpgAmount, sampleNumber, isGasExist } = props.data;
  const isPassed = !(mass < 190 && mass > 210) || isGasExist ? true : false;

  return (
    <div className="w-5/6 h-5/6 bg-[#526D82] flex flex-col gap-3 justify-center items-center rounded-md">
      <FontAwesomeIcon
        size="3x"
        icon={faVial}
        color="white"
        className="-ml-52"
      />
      {lpgAmount && lpgAmount % 9 === 0 ? (
        <div
          className={`absolute top-14 right-14 text-white text-xs px-3 py-1 font-mono ${
            isPassed ? "bg-green-600" : "bg-red-600"
          } font-semibold rounded-lg drop-shadow-sm`}
        >
          Test {isPassed ? "Passed!" : "Rejected!"}
        </div>
      ) : null}
      <div className="flex gap-2 justify-center items-center">
        <div className="text-white text-8xl">{sampleNumber}</div>
        <div className="text-white text-lg -mt-20">Sample</div>
      </div>
      <div className="text-white text-sm mt-2 ml-32">*Number of Sample</div>
    </div>
  );
};

SampleNumberCard.propTypes = {
  data: {
    mass: PropType.number.isRequired,
    lpgAmount: PropType.number.isRequired,
    sampleNumber: PropType.number.isRequired,
    isGasExist: PropType.bool.isRequired,
  },
};

export default SampleNumberCard;
