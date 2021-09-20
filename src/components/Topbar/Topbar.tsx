import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentArraySize,
  setArraySize,
} from "../../store/sorting.slice";
import {
  TopbarContainer,
  RangeInput,
  TopbarLeft,
  RangeTooltip,
} from "./Topbar.styled";
const Topbar = () => {
  const rangeValue = useSelector(selectCurrentArraySize);
  const dispatch = useDispatch();
  return (
    <TopbarContainer>
      <TopbarLeft>
        <RangeTooltip style={{ left: `${((rangeValue - 2) / 498) * 100}%` }}>
          {rangeValue}
        </RangeTooltip>
        <RangeInput
          type="range"
          value={rangeValue}
          min={2}
          max={500}
          onChange={(e) =>
            dispatch(setArraySize({ arraySize: parseInt(e.target.value) }))
          }
        />
      </TopbarLeft>
    </TopbarContainer>
  );
};

export default Topbar;
