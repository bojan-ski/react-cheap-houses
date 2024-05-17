import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Offers from "./pages/Offers"
import Contact from "./pages/Contact"

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
        element: <Offers />
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
