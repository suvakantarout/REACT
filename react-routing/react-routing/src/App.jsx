import { useState } from 'react'
import './App.css'

// Import router statement
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

// Crate all Routes
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },

    {
      path: "/About",
      element:
        <div>
          <Navbar />
          <About />
        </div>
    },

    {
      path: "/Dashboard",
      element:
        <div>
          <Navbar />
          <Dashboard />
        </div>,
        // Children used for Nested routing
        children: [
        {
          path: 'courses',
          element: <Courses/>
        },

        {
          path: 'mock-tests',
          element: <MockTest/>
        },

        {
          path: 'reports',
          element: <Reports/>
        }
      ]
    },

    // Dynamic Routing
    {
      path: "/student/:id",
      element:
        <div>
          <Navbar />
          <ParamComp />
        </div>
    },

    // Route for Showing the error message
    {
      path: '*',
      element: <NotFound />
    }

  ]
);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App




// CREATE BROWSER ROUTER

// import
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// // Create
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);

// // router provider
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
