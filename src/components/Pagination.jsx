// import { useState } from "react"
// import { useLoaderData } from "react-router-dom"
// React Icons
import { GrNext, GrPrevious } from "react-icons/gr"

let pointA = 0
let pointB = 6
let currentPageNumber = 1

const Pagination = ({ allPostedListingsData, setDisplayedListingsList }) => {
    // console.log(allPostedListingsData);
    // const allPostedListings = useLoaderData()
    // console.log(allPostedListings);

    // const [list, setList] = useState({
    //     totalListOfPostedListings: allPostedListingsData,
    //     displayedListOfPostedListings: allPostedListingsData.length > 6 ? allPostedListingsData.slice(0, 6) : allPostedListingsData
    // })

    const paginationOption = (term) => {
        // console.log(term);
        // console.log(pointA);
        // console.log(pointB);
        // console.log(currentPageNumber);
        // console.log(list.displayedListOfPostedListings);

        if (term === 'plus') {
            pointA += 6
            pointB += 6
            currentPageNumber += 1
        }

        if (term === 'minus') {
            pointA -= 6
            pointB -= 6
            currentPageNumber -= 1
        }

        if (pointB == 0) {
            // console.log('Radi - 1');
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(0, 6)
            }))
            pointA = 0
            pointB = 6
            currentPageNumber = 1
        } else if (pointB > allPostedListingsData.length && pointA >= allPostedListingsData.length) {
            // console.log('Radi - 2');
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(0, 6)
            }))
            pointA = 0
            pointB = 6
            currentPageNumber = 1
        } else if (pointB > allPostedListingsData.length) {
            // console.log('Radi - 3');
            const lastPostedListings = allPostedListingsData.length - pointA
            // console.log(lastPostedListings);
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(-lastPostedListings)
            }))
            // pointA = 0
            // pointB = 6
            currentPageNumber = Math.ceil(allPostedListingsData.length / 6)
        } else {
            // console.log('Radi - 4');
            setDisplayedListingsList(currData => ({
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
        <div className="pagination mb-4 d-flex align-items-center justify-content-between">
            <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Broj stranice:
                    <span className="mx-1 text-dark">
                        {currentPageNumber}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(allPostedListingsData.length / 6)}
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