import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Donations from "../pages/Donations/Donations";


const myCeareRoute = createBrowserRouter([
   {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
            // loader:()=> fetch('./allData.json')
        },
        {
            path:'/donations',
            element:<Donations></Donations>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/donation/:id',
            element:<Donation></Donation>,
            loader:()=> fetch('./allData.json')
        }
    ]
   }
]);
export default myCeareRoute;