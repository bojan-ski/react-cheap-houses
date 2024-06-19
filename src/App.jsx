import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import PostedListings from "./pages/PostedListings"
import SelectedListing from "./pages/SelectedListing"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"

// LOADERS
import { loader as allPostedListingsLoader } from "./pages/PostedListings"
import { loader as selectedListingLoader } from "./pages/SelectedListing"
import { loader as userPostedListingsLoader } from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Dashboard />,
        // loader: allPostedListingsLoader
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
        path: 'nalog',
        element: <Profile/>,
        loader: userPostedListingsLoader
      },
      {
        path: 'nalog/:id',
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
