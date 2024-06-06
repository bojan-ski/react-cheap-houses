import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import PostedListings from "./pages/PostedListings"
import SelectedListing from "./pages/SelectedListing"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

// LOADERS
import { loader as allPostedListingsLoader } from "./pages/PostedListings"
import { loader as selectedListingLoader } from "./pages/SelectedListing"
import { loader as userPostedListingsLoader } from "./pages/Profile"

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
        element: <SelectedListing />,
        loader: selectedListingLoader
      },
      {
        path: 'moj-nalog',
        element: <Profile/>,
        loader: userPostedListingsLoader
      },
      {
        path: 'moj-nalog/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader
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
