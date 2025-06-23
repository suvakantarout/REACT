import { useState } from 'react'
import './App.css'

// Import router statement
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

// Crate all Routes
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/Dashboard",
      element: <Dashboard />
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
