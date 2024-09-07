import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import Privacy from './routes/Privacy.jsx';
import Products from './routes/Products.jsx';
import Quote from './routes/Quote.jsx';
import Services from './routes/Services.jsx';
import Team from './routes/Team.jsx';
import Terms from './routes/Terms.jsx';
import Accessories from './routes/Accessories.jsx';
import Rebar from './routes/Rebar.jsx';
import Credit from './routes/Credit.jsx';
import Job from './routes/Job.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/contact", element: <Contact />, },
  { path: "/privacy-policy", element: <Privacy />, },
  { path: "/products", element: <Products />, },
  { path: "/get-a-quote", element: <Quote />, },
  { path: "/services", element: <Services />, },
  { path: "/meet-the-team", element: <Team />, },
  { path: "/terms-and-conditions", element: <Terms />, },
  { path: "/accessories", element: <Accessories />, },
  { path: "/rebar", element: <Rebar />, },
  { path: "/credit-application", element: <Credit />, },
  { path: "/job-openings", element: <Job />, },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
