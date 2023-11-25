import React  from 'react'
import {createBrowserRouter} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './../components/web/home/Home.jsx';
import Categories from './../components/web/categories/Categories.jsx';
import DashboaredLayout from './DashboaredLayout.jsx';
import HomeDashboared from './../components/dashboared/home/Home.jsx';
import CategoriesDashboared from './../components/dashboared/categories/Categories.jsx';
import Register from '../components/web/register/Register.jsx';
import Login from '../components/web/login/Login.jsx';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'home',
          element:<Home/>
        },
        {
          path:'categories',
          element:<Categories/>
        },
        {
          path:'register',
          element:<Register/>
        },
        
        {
          path:'login',
          element:<Login/>
        },

        {
          path:'*',
          element:<h2>Page Not Found ---- web </h2>
        }
      ]
    },
  
    {
      path: "/dashboared",
      element: <DashboaredLayout/>,
      children:[
        {
          path:'home',
          element:<HomeDashboared/>,
        },
        {
          path:'categories',
          element:<CategoriesDashboared/>
        },
        {
          path:'*',
          element:<h2>Page Not Found ---- dashboared </h2>
        }

      ]
    },
  ]);
  