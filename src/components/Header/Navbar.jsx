import { NavLink } from "react-router-dom";
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className=" px-[7%] py-5 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="">
                    
                  <img src={Logo}/>
                </div>
                <div>
                    <ul className="flex space-x-7">
                        <li className="font-semibold">
                        <NavLink to="/"className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""} >
                                Home
                            </NavLink>
                        </li>
                        <li className="font-semibold">
                           <NavLink to="/donations"className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""} >
                               Donation
                            </NavLink>
                        </li>
                        <li className="font-semibold">
                            <NavLink to="/statistics"className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""} >
                               Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;