import { render, screen, fireEvent } from "@testing-library/react";
import PokemonInput from ".";

describe("When the input field is is submitted with new value, the name of the caracter will change", () => {
  test("An input field with button is rendered", () => {
    render(<PokemonInput />);

    const inputField = screen.getByPlaceholderText("Enter new name");
    const changeNameButton = screen.getByRole("button", {
      name: /Change name/i,
    });

    expect(inputField).toBeInTheDocument();
    expect(changeNameButton).toBeInTheDocument();
  });

  test("The input field updates the value", () => {
    const mockPokemonName = jest.fn(); //This is to simulate a useState value and to show how its value changes using the input element and submit button
    const { getByPlaceholderText, getByText } = render(
      <PokemonInput onNameChange={mockPokemonName} />
    );
    const inputField = getByPlaceholderText("Enter new name");
    const changeNameButton = getByText("Change Name");

    fireEvent.change(inputField, { target: { value: "Bulbasaur" } });
    fireEvent.click(changeNameButton);

    expect(mockPokemonName).toHaveBeenCalledWith("Bulbasaur");
    expect(inputField.value).toBe("");
  });
});
