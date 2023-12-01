import {
  render,
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import PokemonVote from "../components/PokemonVote";

describe("PokemonVote component", () => {
  test("Renders the title, image, vote buttons, and scores for three Pokemon", () => {
    render(<PokemonVote />);

    const names = screen.getAllByRole("heading", { level: 3 });
    const voteButton = screen.getAllByRole("button", { name: /Vote/i });
    const voteScore = screen.getAllByTestId("paragraph", { name: /votes/i });

    expect(names.length).toBe(3);
    expect(voteButton.length).toBe(3);
    expect(voteScore.length).toBe(3);
  });

  test('increments Bulbasaur votes when the Vote Bulbasaur button is clicked', () => {
    render(<PokemonVote />);

    const initialVoteCount = screen.getByTestId('bulbasaur-vote').textContent; //used a span tag to single out the vote count text content

    const voteBulbasaurButton = screen.getByText('Vote Bulbasaur');
    fireEvent.click(voteBulbasaurButton);

    const updatedVoteCount = screen.getByTestId('bulbasaur-vote').textContent;

    expect(parseInt(updatedVoteCount)).toBe(parseInt(initialVoteCount) + 1);
  });

  test('increments Bulbasaur votes when the Vote Charmander button is clicked', () => {
    render(<PokemonVote />);

    const initialVoteCount = screen.getByTestId('charmander-vote').textContent;

    const voteBulbasaurButton = screen.getByText('Vote Charmander');
    fireEvent.click(voteBulbasaurButton);

    const updatedVoteCount = screen.getByTestId('charmander-vote').textContent;

    expect(parseInt(updatedVoteCount)).toBe(parseInt(initialVoteCount) + 1);
  });

  test('increments Bulbasaur votes when the Vote Squirtle button is clicked', () => {
    render(<PokemonVote />);

    const initialVoteCount = screen.getByTestId('squirtle-vote').textContent;

    const voteBulbasaurButton = screen.getByText('Vote Squirtle');
    fireEvent.click(voteBulbasaurButton);

    const updatedVoteCount = screen.getByTestId('squirtle-vote').textContent;

    expect(parseInt(updatedVoteCount)).toBe(parseInt(initialVoteCount) + 1);
  });
})

describe("The content of the imported components are rendered", ()=> {

  test ("The display with the winner is rendered", () => {
    render(<PokemonVote/>)

    const winnerDisplay = screen.getByRole("heading", {level: 2})

    expect(winnerDisplay).toBeInTheDocument()
  })

  test('Input field and submit buttons from imported component is rendered three times', () => {
    render(<PokemonVote />);

    const inputFields = screen.getAllByPlaceholderText("Enter new name");
    const changeNameButtons = screen.getAllByRole("button", {
      name: /Change name/i,
    });

    expect(changeNameButtons.length).toBe(3);
    expect(inputFields.length).toBe(3);
  });

  test("PokemonInput updates the respective name", () => {
    render(<PokemonVote />);

    waitFor(() => {
      const bulbasaurInput = getByTestId("bulbasaur-input");
      expect(bulbasaurInput).toBeInTheDocument();
      fireEvent.change(bulbasaurInput, {
        target: { value: "New Bulbasaur Name" },
      });
      expect(bulbasaurInput.value).toBe("New Bulbasaur Name");
    });

    waitFor(() => {
      const charmanderInput = getByTestId("charmander-input");
      expect(charmanderInput).toBeInTheDocument();
      fireEvent.change(charmanderInput, {
        target: { value: "New Charmander Name" },
      });
      expect(charmanderInput.value).toBe("New Charmander Name");
    });

    waitFor(() => {
      const squirtleInput = getByTestId("squirtle-input");
      expect(squirtleInput).toBeInTheDocument();
      fireEvent.change(squirtleInput, {
        target: { value: "New Squirtle Name" },
      });
      expect(squirtleInput.value).toBe("New Squirtle Name");
    });
  });
});

