import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className="">
           <Navbar></Navbar>
           <Outlet className="px-[7%]"></Outlet>
        </div>
    );
};

export default MainLayout;