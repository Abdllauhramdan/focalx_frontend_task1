import Landing from "./modules/landing";
import Properties from "./modules/properties";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyDetails from "./modules/propertyDetails";
import ContactModules from "./modules/ContactModules.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/live/templatemo_591_villa_agency",
    element: <PropertyDetails />,
  },
  {
    path: "/ContactUs",
    element: <ContactModules />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
