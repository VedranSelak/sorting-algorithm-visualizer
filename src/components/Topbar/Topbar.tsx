import { useState } from "react";
import {
  TopbarContainer,
  RangeInput,
  TopbarLeft,
  RangeTooltip,
} from "./Topbar.styled";
const Topbar = () => {
  const [rangeValue, setRangeValue] = useState(200);
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
          onChange={(e) => setRangeValue(parseInt(e.target.value))}
        />
      </TopbarLeft>
    </TopbarContainer>
  );
};

export default Topbar;
