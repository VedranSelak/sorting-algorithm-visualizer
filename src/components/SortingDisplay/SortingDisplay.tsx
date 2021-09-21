import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentArray,
  selectCurrentArraySize,
  setCurrentArray,
} from "../../store/sorting.slice";
import { SortingDisplayWrapper, SortingItem } from "./SortingDisplay.styled";

const SortingDisplay = () => {
  const arraySize = useSelector(selectCurrentArraySize);
  const dispatch = useDispatch();
  const currentArray = useSelector(selectCurrentArray);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(getRandomNumber(5, 1000));
    }
    dispatch(setCurrentArray({ currentArray: array }));
  }, [arraySize, dispatch]);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <SortingDisplayWrapper>
      {currentArray.map((num, index) => {
        const height = (num / 1000) * 100;
        return <SortingItem key={index} style={{ height: `${height}%` }} />;
      })}
    </SortingDisplayWrapper>
  );
};

export default SortingDisplay;