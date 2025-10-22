import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} = useCartContext();

    return  (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/bikini"}>Bikini</Link>
                </li>
                <li>
                    <Link to={"/category/enteriza"}>Enteriza</Link>
                </li>
                <li>
                    <Link>Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};