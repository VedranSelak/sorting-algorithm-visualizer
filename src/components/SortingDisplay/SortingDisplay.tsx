import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentArraySize } from "../../store/sorting.slice";
import { SortingDisplayWrapper, SortingItem } from "./SortingDisplay.styled";

const SortingDisplay = () => {
  const arraySize = useSelector(selectCurrentArraySize);
  const [currentArray, setCurrentArray] = useState<number[]>([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(getRandomNumber(5, 1000));
    }
    setCurrentArray(array);
  }, [arraySize]);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <SortingDisplayWrapper>
      {currentArray.map((num, index) => {
        const height = (num / 1000) * 100;
        return <SortingItem key={index} value={height} />;
      })}
    </SortingDisplayWrapper>
  );
};

export default SortingDisplay;
