import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentAlgorithm,
  selectCurrentArraySize,
  setArraySize,
} from "../../store/sorting.slice";
import {
  TopbarContainer,
  RangeInput,
  TopbarLeft,
  RangeTooltip,
  TopbarRight,
  SortButton,
  AlgorithmName,
  Accent,
} from "./Topbar.styled";

const Topbar = () => {
  const rangeValue = useSelector(selectCurrentArraySize);
  const selectedAlgorithm = useSelector(selectCurrentAlgorithm);
  const dispatch = useDispatch();
  const [tooltipShow, setTooltipShow] = useState(false);

  return (
    <TopbarContainer>
      <TopbarLeft>
        {tooltipShow && (
          <RangeTooltip style={{ left: `${((rangeValue - 2) / 423) * 100}%` }}>
            {rangeValue}
          </RangeTooltip>
        )}
        <RangeInput
          onMouseEnter={() => setTooltipShow(true)}
          onMouseLeave={() => setTooltipShow(false)}
          type="range"
          value={rangeValue}
          min={2}
          max={425}
          onChange={(e) =>
            dispatch(setArraySize({ arraySize: parseInt(e.target.value) }))
          }
        />
      </TopbarLeft>
      <TopbarRight>
        <AlgorithmName>
          {selectedAlgorithm !== "" ? (
            <>
              Algorithm : <Accent>{selectedAlgorithm}</Accent>
            </>
          ) : (
            "Please select an algorithm"
          )}
        </AlgorithmName>
        <SortButton>Sort</SortButton>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default Topbar;
