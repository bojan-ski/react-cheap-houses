import { RouterProvider, createBrowserRouter } from "react-router-dom"
// PAGES
import AppLayout from "./pages/AppLayout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import PostedListings from "./pages/PostedListings.jsx"
import SelectedListing from "./pages/SelectedListing.jsx"
import Profile from "./pages/Profile.jsx"
import Blog from "./pages/Blog.jsx"
import SelectedBlogPost from "./pages/SelectedBlogPost.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
// LOADERS
import { loader as allPostedListingsLoader } from "./pages/PostedListings.jsx"
import { loader as selectedListingLoader } from "./pages/SelectedListing.jsx"
import { loader as userPostedListingsLoader } from "./pages/Profile.jsx"
import { loader as allBlogPostsLoader } from "./pages/Blog.jsx"
import { loader as selectedBlogPostLoader } from "./pages/SelectedBlogPost.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/oglasi',
        element: <PostedListings />,
        loader: allPostedListingsLoader
      },
      {
        path: '/oglasi/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader
      },
      {
        path: '/nalog',
        element: <Profile/>,
        loader: userPostedListingsLoader
      },
      {
        path: '/nalog/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: allBlogPostsLoader
      },
      {
        path: '/blog/:id',
        element: <SelectedBlogPost />,
        loader: selectedBlogPostLoader
      },
      {
        path: '/kontakt',
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
