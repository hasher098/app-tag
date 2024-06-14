import { render } from "@testing-library/react";
import { CmsAi } from "./CmsAi";

describe("CmsAi component", () => {
  it("renders CMS AI section correctly", () => {
    const { getByText } = render(<CmsAi />);
    expect(getByText("CMS AI")).toBeInTheDocument();
  });

  it("renders 'Analizuj tekst' section correctly", () => {
    const { getByText } = render(<CmsAi />);
    expect(getByText("Analizuj tekst")).toBeInTheDocument();
  });

  it("renders 'Najbardziej popularne tagi' section correctly", () => {
    const { getByText } = render(<CmsAi />);
    expect(getByText("Najbardziej popularne tagi")).toBeInTheDocument();
  });
});
