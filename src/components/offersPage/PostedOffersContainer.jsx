import { useState } from "react"
// components
import PostedOffersGridView from "./PostedOffersGridView"
import PostedOffersListView from "./PostedOffersListView"
// React Icons
import { FaListUl } from "react-icons/fa"
import { BsGrid3X3Gap } from "react-icons/bs"

const PostedOffersContainer = () => {
    const [layout, setLayout] = useState('grid')

    return (
        <section className="posted-offers-list mb-5">
            {/*  */}
            <div className="text-end mb-5">
                <button type='button' className="layout-btn btn text-muted me-2" onClick={() => setLayout('grid')}>
                    <BsGrid3X3Gap size={18} />
                </button>
                <button type='button' className="layout-btn btn text-muted" onClick={() => setLayout('list')}>
                    <FaListUl size={18}  />
                </button>
            </div>

            {/* offers list */}
            {layout === 'grid' ? <PostedOffersGridView /> : <PostedOffersListView />}
        </section>
    )
}

export default PostedOffersContainer