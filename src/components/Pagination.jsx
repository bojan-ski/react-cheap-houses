// React Icons
import { GrNext, GrPrevious } from "react-icons/gr"

let pointA = 0
let pointB = 9
let currentPageNumber = 1

const Pagination = ({ allPostedListingsData, setDisplayedListingsList }) => {

    const paginationOption = (term) => {
        if (term === 'plus') {
            pointA += 9
            pointB += 9
            currentPageNumber += 1
        }

        if (term === 'minus') {
            pointA -= 9
            pointB -= 9
            currentPageNumber -= 1
        }

        if (pointB == 0) {
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(0, 9)
            }))
            pointA = 0
            pointB = 9
            currentPageNumber = 1
        } else if (pointB > allPostedListingsData.length && pointA >= allPostedListingsData.length) {
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(0, 9)
            }))
            pointA = 0
            pointB = 9
            currentPageNumber = 1
        } else if (pointB > allPostedListingsData.length) {
            const lastPostedListings = allPostedListingsData.length - pointA
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(-lastPostedListings)
            }))
            currentPageNumber = Math.ceil(allPostedListingsData.length / 9)
        } else {
            setDisplayedListingsList(currData => ({
                ...currData,
                displayedListOfPostedListings: currData.totalListOfPostedListings.slice(pointA, pointB)
            }))
        }
    }

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
                        {Math.ceil(allPostedListingsData.length / 9)}
                    </span>
                </p>
            </div>

            <div className="pagination-btn-container text-end">
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