import { createBrowserRouter} from "react-router"
import Mainlayout from "./layouts/Mainlayout"

import { RouterProvider } from "react-router/dom"
import Home from "./routes/Home"



const router = createBrowserRouter([
 { path: '/',
  Component : Mainlayout,
  children: [
    {
      index: true,
      element: <Home/>
    }
  ]
 }
])
function Router() {

  return (
    <RouterProvider router={router}/>
   )
}

export default Router
