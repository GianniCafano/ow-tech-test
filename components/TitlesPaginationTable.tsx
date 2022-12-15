import React, { useState } from 'react'
import { ITitlePaginationTable } from './TitlesPaginationTable.d'
import Link from 'next/link';

function TitlesPaginationTable({ titles, defaultPage }: ITitlePaginationTable) {

const [currentPage, setCurrentPage] = useState<number>(defaultPage);
  const [recordsPerPage] = useState<number>(5);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = titles.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(titles.length / recordsPerPage);

    const pageNumbers = Array.from(Array(numberOfPages+1).keys()).slice(1);

    function prevPage() {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if(currentPage !== numberOfPages) setCurrentPage(currentPage + 1)
    }

  return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto relative">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Title number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            className of title
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentRecords ? currentRecords.map((title, key) => (
                            <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">
                                    <Link href={`/titles/${title['Title Number']}`}>
                                        {title['Title Number']}
                                    </Link>
                                </td>
                                <td className="py-4 px-6">
                                    {title.Tenure}
                                </td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>

            <nav aria-label="Page navigation example" className="flex justify-center mt-4">
                <ul className="inline-flex -space-x-px">
                    <li onClick={prevPage}>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Prev
                        </a>
                    </li>
                {pageNumbers.map(pageNumber => (
                        <li key={pageNumber} 
                            className= {`page-item ${currentPage == pageNumber ? 'active' : ''} `} >

                            <a onClick={() => setCurrentPage(pageNumber)} href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                {pageNumber}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a onClick={nextPage} href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>

   )
}

export default TitlesPaginationTable