
import { RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Register from "./components/web/register/Register.jsx";
import Login from "./components/web/login/Login.jsx";
import Home from "./components/web/home/Home.jsx";
import Categories from "./components/web/categories/Categories.jsx";
import HomeDashboard from "./components/dashboared/home/Home.jsx";
import CategoriesDashboard from './components/dashboared/categories/Categories.jsx'
import { createBrowserRouter } from "react-router-dom";
import DashboaredLayout from "./layouts/DashboaredLayout.jsx";
export default function App() {





  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:<Login/>
          },
          {
            path:'home',
            element:<Home />
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<DashboaredLayout />,
        children:[
          {
        path:'home',
        element:<HomeDashboard />
      }
      ,{
        path:'categories',
        element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
 
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}
