import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'; 
import { mockData } from '../mocks/mockData'
import TitlesPaginationTable from "./TitlesPaginationTable"

describe('TitlesTable', () => {
    it('should display a list of given titles and tenures', async () => {
        render(<TitlesPaginationTable titles={mockData} defaultPage={1} />)

        const titleNumber = await screen.findByRole('link', {
            name: '00000'
        })
        const tenure = await screen.findByRole('cell', {
            name: 'Test tenure'
        })
        expect(await screen.findByRole('table')).toBeInTheDocument();
        expect(titleNumber).toBeInTheDocument()
        expect(tenure).toBeInTheDocument()
    })

    it('should go to the previous page when prev button is clicked', async () => {
        render(<TitlesPaginationTable titles={mockData} defaultPage={2} />)

        const paginationListItems = await screen.findAllByRole('listitem');

        const prevButton = await screen.findByRole('link', {
            name: "Prev"
        })

        expect(await screen.findByRole('table')).toBeInTheDocument()

        fireEvent.click(prevButton);

        expect(paginationListItems[1]).toHaveClass('active');
    })

    it('should go to the next page when next button is clicked', async () => {
        const user = userEvent.setup();
        render(<TitlesPaginationTable titles={mockData} defaultPage={1} />)

        const paginationListItems = await screen.findAllByRole('listitem');

        const nextButton = await screen.findByRole('link', {
            name: "Next"
        })

        expect(await screen.findByRole('table')).toBeInTheDocument()

        fireEvent.click(nextButton)
        expect(paginationListItems[2]).toHaveClass('active');
    })
})