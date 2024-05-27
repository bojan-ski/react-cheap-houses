import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

// LOADERS
import { loader as offersLoader } from "./pages/Offers"

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
