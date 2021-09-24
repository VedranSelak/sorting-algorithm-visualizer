import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentAlgorithm,
  selectCurrentArraySize,
  selectSortingSpeed,
  setArraySize,
  setSortingSpeed,
} from "../../store/sorting.slice";
import {
  selectIsButtonClicked,
  setIsButtonClicked,
} from "../../store/ui.slice";
import {
  TopbarContainer,
  RangeInput,
  TopbarLeft,
  RangeTooltip,
  TopbarRight,
  SortButton,
  AlgorithmName,
  Accent,
  TopbarMiddle,
  RangeDescription,
  DescriptionItem,
} from "./Topbar.styled";

const Topbar = () => {
  const rangeValue = useSelector(selectCurrentArraySize);
  const selectedAlgorithm = useSelector(selectCurrentAlgorithm);
  const sortingSpeed = useSelector(selectSortingSpeed);
  const dispatch = useDispatch();
  const [tooltipShow, setTooltipShow] = useState(false);
  const isButtonClicked = useSelector(selectIsButtonClicked);

  const handleClick = () => {
    dispatch(setIsButtonClicked({ isButtonClicked: true }));
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
      <TopbarMiddle>
        <RangeInput
          type="range"
          value={101 - sortingSpeed}
          min={1}
          max={100}
          onChange={(e) => {
            const speed = 101 - parseInt(e.target.value);
            dispatch(setSortingSpeed({ sortingSpeed: speed }));
          }}
        />
        <RangeDescription>
          <DescriptionItem>Slow</DescriptionItem>
          <DescriptionItem>Fast</DescriptionItem>
        </RangeDescription>
      </TopbarMiddle>
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
        <SortButton disabled={isButtonClicked} onClick={handleClick}>
          Sort
        </SortButton>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default Topbar;
