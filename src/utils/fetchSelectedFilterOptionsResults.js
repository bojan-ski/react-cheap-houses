import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase.config";

const fetchSelectedFilterOptionsResults = async (selectedFilterOptions) => {
    // console.log(selectedFilterOptions);
    console.log(selectedFilterOptions.selectedOfferType);
    console.log(selectedFilterOptions.selectedPropertyType);
    console.log(selectedFilterOptions.selectedDistrict);

    // console.log(selectedFilterOptions.offerType !== 'svi oglasi');
    // console.log(selectedFilterOptions.propertyType !== 'svi tipovi imovine');
    // console.log(selectedFilterOptions.propertyDistrict !== 'svi okruzi');

    try {
        if(true){
            console.log('radi');
        }
        const q = query(collection(db, "listings"),
            selectedFilterOptions.selectedOfferType !== 'svi oglasi' && where("offerType", "==", selectedFilterOptions.selectedOfferType),
            selectedFilterOptions.selectedPropertyType !== 'svi tipovi imovine' && where("propertyType", "==", selectedFilterOptions.selectedPropertyType),
            selectedFilterOptions.selectedDistrict !== 'svi okruzi' && where("propertyDistrict", "==", selectedFilterOptions.selectedDistrict),
        );

        const querySnap = await getDocs(q)

        let filterResults = []

        querySnap.forEach((offer) => {           
            return filterResults.push({
                id: offer.id,
                data: offer.data()
            })
        })

        console.log(filterResults);

        // return filterResults
    } catch (error) {
        console.log(error)
        console.log('Could not fetch user data')
    }
}

export default fetchSelectedFilterOptionsResults