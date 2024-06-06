import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import PostedListings from "./pages/PostedListings"
import SelectedOffer from "./pages/SelectedOffer"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

// LOADERS
import { loader as allPostedListingsLoader } from "./pages/PostedListings"
import { loader as selectedOfferLoader } from "./pages/SelectedOffer"
import { loader as userPostedOffersLoader } from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'oglasi',
        element: <PostedListings />,
        loader: allPostedListingsLoader
      },
      {
        path: 'oglasi/:id',
        element: <SelectedOffer />,
        loader: selectedOfferLoader
      },
      {
        path: 'moj-nalog',
        element: <Profile/>,
        loader: userPostedOffersLoader
      },
      {
        path: 'moj-nalog/:id',
        element: <SelectedOffer />,
        loader: selectedOfferLoader
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'kontakt',
        element: <Contact />
      }
    ]
  }
])

const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
