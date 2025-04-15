import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Nopage from "./Pages/Nopage";
import ContactLayout from "./Layout/ContactLayout";
import Info from "./Pages/Info";
import Form from "./Pages/Form";
import JobsLayout from "./Layout/JobsLayout";
import Jobs, { JobsLoader } from "./Pages/Jobs";
import Jobdetails from "./components/Jobdetails";
import { JobdetailLoader } from "./components/Jobdetails";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "product", element: <Product /> },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: <ContactLayout />,
        children: [
          { path: "info", element: <Info /> },
          { path: "form", element: <Form /> }
        ]
      },
      {
        path: "jobs",
        element: <JobsLayout />,
  
        children: [
          { index: true, element: <Jobs />, loader: JobsLoader },
          {
            path:":id",
            element:<Jobdetails/>,
            errorElement:<Error/>,
            loader:JobdetailLoader  
          }
        ]
      },
      { path: "*", element: <Nopage /> },
      { index: true, element: <Home /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;