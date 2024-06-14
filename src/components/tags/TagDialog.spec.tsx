import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TagDialog from "./TagDialog";
import userEvent from "@testing-library/user-event";

// Mockujemy tagSuggestions
jest.mock("../../helpers/suggestions", () => ({
  tagSuggestions: [
    { id: "1", name: "Tag 1", power: 1 },
    { id: "2", name: "Tag 2", power: 2 },
    { id: "3", name: "Tag 3", power: 3 },
    // Dodaj więcej tagów w razie potrzeby
  ],
}));

describe("TagDialog component", () => {
  test("renders save button after opening suggestions", () => {
    render(<TagDialog handleClose={() => {}} />);

    const input = screen.getByPlaceholderText("Wyszukaj grupę lub tag");
    fireEvent.focus(input);
    userEvent.type(input, "Tag");

    const saveButton = screen.getByText("Zapisz");
    expect(saveButton).toBeInTheDocument();
  });
});
