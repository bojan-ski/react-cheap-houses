import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Offers from "./pages/Offers"
import SelectedOffer from "./pages/SelectedOffer"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

// LOADERS
import { loader as offersLoader } from "./pages/Offers"
import { loader as selectedOfferLoader } from "./pages/SelectedOffer"

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
        element: <Offers />,
        loader: offersLoader
      },
      {
        path: 'oglasi/:id',
        element: <SelectedOffer />,
        loader: selectedOfferLoader
      },
      {
        path: 'moj-nalog',
        element: <Profile />
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
