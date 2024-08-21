import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className="flex p-4 gap-4 w-full">
            <SideBar />
            <Outlet/>
        </div>
    )
}

export default Body;