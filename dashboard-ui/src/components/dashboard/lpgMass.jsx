import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";

const LpgMassCard = ({ value }) => {
  return (
    <div className="w-5/6 h-5/6 bg-[#526D82] flex flex-col gap-3 justify-center items-center rounded-md">
      <FontAwesomeIcon
        size="3x"
        color="white"
        icon={faWeightScale}
        className="-ml-52"
      />
      <div className="flex gap-2 justify-center items-center">
        <div className="text-white text-8xl">{value}</div>
        <div className="text-white text-lg -mt-20">Gram</div>
      </div>
      <div className="text-white text-sm ml-32">*Mass of LPG</div>
    </div>
  );
};

LpgMassCard.propTypes = {
  value: PropType.number.isRequired,
};

export default LpgMassCard;
