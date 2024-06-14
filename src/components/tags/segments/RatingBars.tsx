import styled from "styled-components";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RatingBarsProps } from "../types";

const RatingBarsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px; // Odstęp między paskami
`;

const Bar = styled.div`
  width: 15px;
  height: 5px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;

const RatingBars = ({ power: value }: RatingBarsProps) => {
  const getColor = (index: number) => {
    if (value >= 1 && value <= 2) {
      return index < value ? "red" : "gray";
    } else if (value === 3) {
      return index < value ? "orange" : "gray";
    } else if (value >= 4 && value <= 5) {
      return index < value ? "green" : "gray";
    } else if (value >= 5) {
      return "green";
    } else {
      return "gray";
    }
  };
  const getPowerName = (value: number) => {
    if (value >= 1 && value <= 2) {
      return "Słabo";
    } else if (value === 3) {
      return "Średnio";
    } else if (value === 4) {
      return "Dobrze";
    } else if (value >= 5) {
      return "Świetnie!";
    } else {
      return "Słabo";
    }
  };
  return (
    <>
      <RatingBarsWrapper>
        {getPowerName(value)}
        {[0, 1, 2, 3, 4].map((index) => (
          <Bar data-testid="rating-bar" key={index} color={getColor(index)} />
        ))}
      </RatingBarsWrapper>
      {value < 5 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          <IoIosInformationCircleOutline size={30} />

          <div>
            Zbyt mało tagów. Dodaj jeszcze {5 - value} aby poprawić widoczność
            artykułu
          </div>
        </div>
      )}
    </>
  );
};
export default RatingBars;
