import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import './App.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Thankyou from "./pages/Thankyou";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookingForm from "./pages/BookingForm";
import FlightStatus from "./pages/FlightStatus";


function Layout() {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>


  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/booking",
        element: <Booking/>,
      },
      {
        path: "/booking-form",
        element: <BookingForm/>,
      },
      {
        path: "/flight-status",
        element: <FlightStatus/>,
      },
   ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
  {
    path: "/thankyou",
    element: <Thankyou/>,
  }
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
