import propertyTypes from '../../data/propertyTypes';
import districts from '../../data/districts';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const DashboardFilterOptions = () => {
    return (
        <div className="hero-filter">
            <form className='dashboard-form'>
                <div className="row">
                    {/* row item 1 - display selected offer type */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <select className="form-select" id="selectedOfferType">
                            <option value="prodajem">Na prodaju</option>
                            <option value="izdajem">Izdaje se</option>
                        </select>
                    </div>

                    {/* row item 2 - display selected property type */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <select className="form-select" id="selectedPropertyType">
                            {propertyTypes.map((propertyType, idx) => {
                                return <option key={idx} value={propertyType} className="capitalize">
                                    {propertyType}
                                </option>
                            })}
                        </select>
                    </div>

                    {/* row item 3 - display selected district */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <select className="form-select" id="selectedDistrict">
                            {districts.map((district, idx) => {
                                return <option key={idx} value={district} className="capitalize">
                                    {district}
                                </option>
                            })}
                        </select>
                    </div>

                    {/* row item 4 - submit/reset buttons */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                            Pretražite
                            <FaMagnifyingGlass className='ms-2' />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashboardFilterOptions