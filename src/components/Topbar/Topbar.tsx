import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentAlgorithm,
  selectCurrentArray,
  selectCurrentArraySize,
  setArraySize,
  swapElements,
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
  const currentArray = useSelector(selectCurrentArray);

  const handleClick = () => {
    const ourArray = [...currentArray];
    for (let l = 0; l < ourArray.length - 1; l++) {
      for (let k = 0; k < ourArray.length - l - 1; k++) {
        if (ourArray[k] > ourArray[k + 1]) {
          dispatch(swapElements({ i: k, j: k + 1 }));
          let temp = ourArray[k];
          ourArray[k] = ourArray[k + 1];
          ourArray[k + 1] = temp;
        }
      }
    }
  };

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
        <SortButton onClick={handleClick}>Sort</SortButton>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default Topbar;
