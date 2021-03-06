import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lightBlue, accentRed } from "../../globalStyles";
import {
  selectCurrentAlgorithm,
  selectCurrentArray,
  selectCurrentArraySize,
  selectSortingSpeed,
  setCurrentArray,
} from "../../store/sorting.slice";
import {
  addToast,
  selectIsButtonClicked,
  setIsButtonClicked,
} from "../../store/ui.slice";
import { bubbleSort } from "../../utils/helpers/bubbleSort.helper";
import { SortingDisplayWrapper, SortingItem } from "./SortingDisplay.styled";
import {
  BUBBLE,
  INSERTION,
  MERGE,
  QUICK,
  SELECTION,
  SHELL,
} from "../../utils/constants/algorithmNames.constants";
import { mergeSort } from "../../utils/helpers/mergeSort.helper";
import { quickSort } from "../../utils/helpers/quickSort.helper";
import { selectionSort } from "../../utils/helpers/selectionSort.helper";
import { insertionSort } from "../../utils/helpers/insertionSort.helper";
import { shellSort } from "../../utils/helpers/shellSort.helper";
import { ERROR } from "../../utils/constants/toastTypes.constants";

const SortingDisplay = () => {
  const arraySize = useSelector(selectCurrentArraySize);
  const dispatch = useDispatch();
  const currentArray = useSelector(selectCurrentArray);
  const isButtonClicked = useSelector(selectIsButtonClicked);
  const sortingSpeed = useSelector(selectSortingSpeed);
  const currentAlgorithm = useSelector(selectCurrentAlgorithm);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(getRandomNumber(5, 1000));
    }
    // creating a dummy timeout to get the highest timeout id
    const highestTimeoutId = setTimeout(() => {});
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    const elements = document.getElementsByClassName(
      "array-item"
    ) as HTMLCollectionOf<HTMLElement>;
    // reseting the color of all elements
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = lightBlue;
    }
    dispatch(setCurrentArray({ currentArray: array }));
  }, [arraySize, dispatch]);

  useEffect(() => {
    if (isButtonClicked) {
      switch (currentAlgorithm) {
        case BUBBLE:
          executeSwapAlgorithms(bubbleSort);
          break;
        case MERGE:
          executeMergeSort();
          break;
        case QUICK:
          executeSwapAlgorithms(quickSort);
          break;
        case SELECTION:
          executeSwapAlgorithms(selectionSort);
          break;
        case INSERTION:
          executeSwapAlgorithms(insertionSort);
          break;
        case SHELL:
          executeSwapAlgorithms(shellSort);
          break;
        default:
          dispatch(
            addToast({ type: ERROR, message: "Please select an algorithm" })
          );
          dispatch(setIsButtonClicked({ isButtonClicked: false }));
          break;
      }
    } else {
      dispatch(setIsButtonClicked({ isButtonClicked: false }));
    }
  }, [isButtonClicked, dispatch]);

  const executeSwapAlgorithms = (
    callback: (arrayToSort: number[]) => number[][]
  ) => {
    const arrayToSort = [...currentArray];
    const animations = callback(arrayToSort);
    const elements = document.getElementsByClassName(
      "array-item"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let k = 0; k < animations.length; k++) {
      const animation = animations[k];
      if (k % 2 === 0) {
        setTimeout(() => {
          const [i, j] = animation;
          elements[i].style.backgroundColor = accentRed;
          elements[j].style.backgroundColor = accentRed;
          const temp = elements[i].style.height;
          elements[i].style.height = elements[j].style.height;
          elements[j].style.height = temp;
        }, k * sortingSpeed);
      } else {
        setTimeout(() => {
          const [i, j] = animation;
          elements[i].style.backgroundColor = lightBlue;
          elements[j].style.backgroundColor = lightBlue;
        }, k * sortingSpeed);
      }
    }
    setTimeout(() => {
      dispatch(setIsButtonClicked({ isButtonClicked: false }));
      dispatch(setCurrentArray({ currentArray: arrayToSort }));
    }, animations.length * sortingSpeed);
  };

  const executeMergeSort = () => {
    const arrayToSort = [...currentArray];
    const animations = mergeSort(arrayToSort);
    const elements = document.getElementsByClassName(
      "array-item"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let k = 0; k < animations.length; k++) {
      const animation = animations[k];
      if (k % 2 === 0) {
        setTimeout(() => {
          const [i, j] = animation;
          elements[i].style.backgroundColor = accentRed;
          elements[j].style.backgroundColor = accentRed;
        }, k * sortingSpeed);
      } else {
        setTimeout(() => {
          const [i, value, j] = animation;
          elements[i].style.height = `${(value / 1000) * 100}%`;
          elements[i].style.backgroundColor = lightBlue;
          elements[j].style.backgroundColor = lightBlue;
        }, k * sortingSpeed);
      }
    }
    setTimeout(() => {
      dispatch(setIsButtonClicked({ isButtonClicked: false }));
      dispatch(setCurrentArray({ currentArray: arrayToSort }));
    }, animations.length * sortingSpeed);
  };

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
