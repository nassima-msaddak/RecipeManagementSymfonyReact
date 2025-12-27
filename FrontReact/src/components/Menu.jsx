import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/recettes">Recettes</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
