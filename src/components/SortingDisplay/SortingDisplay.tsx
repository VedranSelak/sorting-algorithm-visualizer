import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentArray,
  selectCurrentArraySize,
  selectSortingSpeed,
  setCurrentArray,
} from "../../store/sorting.slice";
import {
  selectIsButtonClicked,
  setIsButtonClicked,
} from "../../store/ui.slice";
import { bubbleSort } from "../../utils/helpers/bubbleSort.helper";
import { SortingDisplayWrapper, SortingItem } from "./SortingDisplay.styled";

const SortingDisplay = () => {
  const arraySize = useSelector(selectCurrentArraySize);
  const dispatch = useDispatch();
  const currentArray = useSelector(selectCurrentArray);
  const isButtonClicked = useSelector(selectIsButtonClicked);
  const sortingSpeed = useSelector(selectSortingSpeed);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(getRandomNumber(5, 1000));
    }
    dispatch(setCurrentArray({ currentArray: array }));
  }, [arraySize, dispatch]);

  useEffect(() => {
    if (isButtonClicked) {
      const animations = bubbleSort([...currentArray]);
      const elements = document.getElementsByClassName(
        "array-item"
      ) as HTMLCollectionOf<HTMLElement>;
      animations.forEach((animation, index) => {
        setTimeout(() => {
          const [i, j] = animation;
          const temp = elements[i].style.height;
          elements[i].style.height = elements[j].style.height;
          elements[j].style.height = temp;
        }, index * sortingSpeed);
      });
    }
    dispatch(setIsButtonClicked({ isButtonClicked: false }));
  }, [isButtonClicked, currentArray, dispatch, sortingSpeed]);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <SortingDisplayWrapper>
      {currentArray.map((num, index) => {
        const height = (num / 1000) * 100;
        return (
          <SortingItem
            className="array-item"
            key={index}
            style={{ height: `${height}%` }}
          />
        );
      })}
    </SortingDisplayWrapper>
  );
};

export default SortingDisplay;
