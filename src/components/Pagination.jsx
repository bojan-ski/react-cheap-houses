import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// React Icons
import { GrNext, GrPrevious } from "react-icons/gr"

let pointA = 0
let pointB = 4
let currentPageNumber = 1

const Pagination = () => {
    const allPostedListings = useLoaderData()
    // console.log(allPostedListings);

    const [list, setList] = useState({
        totalListOfPostedListings: allPostedListings,
        displayedListOfPostedListings: allPostedListings.length > 4 ? allPostedListings.slice(0, 4) : allPostedListings
    })

    const paginationOption = (term) => {
        // console.log(term);
        // console.log(pointA);
        // console.log(pointB);
        // console.log(currentPageNumber);
        // console.log(list.displayedListOfPostedListings);

        if (term === 'plus') {
            pointA += 4
            pointB += 4
            currentPageNumber += 1
        }

        if (term === 'minus') {
            pointA -= 4
            pointB -= 4
            currentPageNumber -= 1
        }

        if (pointB == 0) {
            // console.log('Radi - 1');
            setList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(0, 4)
            }))
            pointA = 0
            pointB = 4
            currentPageNumber = 1
        } else if (pointB > allPostedListings.length && pointA >= allPostedListings.length) {
            // console.log('Radi - 2');
            setList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(0, 4)
            }))
            pointA = 0
            pointB = 4
            currentPageNumber = 1
        } else if (pointB > allPostedListings.length) {
            // console.log('Radi - 3');
            const lastPostedListings = allPostedListings.length - pointA
            // console.log(lastPostedListings);
            setList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(-lastPostedListings)
            }))
            // pointA = 0
            // pointB = 4
            currentPageNumber = Math.ceil(allPostedListings.length / 4)
        } else {
            // console.log('Radi - 4');
            setList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(pointA, pointB)
            }))
        }

        // console.log(pointA);
        // console.log(pointB);
        // console.log(currentPageNumber);
        // console.log(list.displayedListOfPostedListings);
    }

    // console.log(list);
    // console.log(list.displayedListOfPostedListings);

    return (
        <div className="pagination mt-3 d-flex align-items-center justify-content-between">
            <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Broj stranice:
                    <span className="mx-1 text-dark">
                        {currentPageNumber}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(allPostedListings.length / 4)}
                    </span>
                </p>
            </div>

            <div className="btn-container text-end">
                <button className="btn px-3 me-3 btn-prev" onClick={() => paginationOption('minus')}>
                    <GrPrevious className="text-white" />
                </button>
                <button className="btn px-3 btn-next" onClick={() => paginationOption('plus')}>
                    <GrNext className="text-white" />
                </button>
            </div>
        </div>
    )
}

export default Pagination