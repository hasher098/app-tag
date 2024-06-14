import { render } from "@testing-library/react";
import RatingBars from "./RatingBars";

describe("RatingBars component", () => {
  it("renders with given power value", () => {
    const { getByText, getAllByTestId } = render(<RatingBars power={3} />);

    expect(getByText("Średnio")).toBeInTheDocument();

    const bars = getAllByTestId("rating-bar");
    expect(bars.length).toBe(5);
  });

  it("renders information message when value is less than 5", () => {
    const { getByText } = render(<RatingBars power={3} />);

    expect(
      getByText(
        "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu"
      )
    ).toBeInTheDocument();
  });

  it("does not render information message when value is 5 or more", () => {
    const { queryByText } = render(<RatingBars power={5} />);

    expect(
      queryByText("Zbyt mało tagów. Dodaj jeszcze")
    ).not.toBeInTheDocument();
  });
});
