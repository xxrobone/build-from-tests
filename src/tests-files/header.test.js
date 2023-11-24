import Header from "."
import {render, screen} from "@testing-library/react"

describe("", () => {
  test("There's a title rendered", () => {
    render(<Header />)
  
    const pageTitle = screen.getByRole("heading", {level: 1})
  
    expect(pageTitle).toBeInTheDocument()
  
  })
  test("The rendered title contains content", () => {
    render(<Header title="Sith Showdown"/>)
  
    const pageTitle = screen.getByRole("heading", {level: 1})
  
    expect(pageTitle).toHaveTextContent(/pokemon showdown/i)
  
  })

})