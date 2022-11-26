import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function Layout() {
  return (
    
    <>
      <Navbar />
      <Home />
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
    path: "/booking",
    element: <Booking/>,
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
