import { RouterProvider, createBrowserRouter } from "react-router-dom"
// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

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

// BRISI !!!!!!!!!!!
import Proba from "./pages/Proba.jsx"
// BRISI !!!!!!!!!!!

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/oglasi',
        element: <PostedListings />,
        loader: allPostedListingsLoader(queryClient)
      },
      {
        path: '/oglasi/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader(queryClient)
      },
      {
        path: '/nalog',
        element: <Profile />,
        loader: userPostedListingsLoader(queryClient)
      },
      {
        path: '/nalog/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader(queryClient)
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: allBlogPostsLoader(queryClient)
      },
      {
        path: '/blog/:id',
        element: <SelectedBlogPost />,
        loader: selectedBlogPostLoader(queryClient)
      },
      {
        path: '/kontakt',
        element: <Contact />
      },
      {
        path: '/proba',
        element: <Proba />
      }
    ]
  }
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
