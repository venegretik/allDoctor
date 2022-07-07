import { Outlet, Router } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
const Nav_menu = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Nav_menu; 