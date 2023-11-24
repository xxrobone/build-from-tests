import {render, screen} from '@testing-library/react'

import Footer from '.'

describe("The footer is rendered with content", () => {
    test('The footer title is rendered', () => {
        render(<Footer/>)
    
        const footerTitle = screen.getByRole('heading', {level: 4})
    
        expect(footerTitle).toBeInTheDocument(); 
    })

    test("The footer contains content", () => {
        render(<Footer/>)

        const footerContent = screen.getByRole('heading', {level: 4})

        expect(footerContent).toHaveTextContent(/copyright/i)
    })
})