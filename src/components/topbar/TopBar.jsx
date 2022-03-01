import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-spotify"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/login">
                            LOGOUT
                        </Link></li>
                </ul>
            </div>
            <div className="topRight">
                <Link className="link" to="/settings">
                        
                    <img className="topImg" src={`${process.env.PUBLIC_URL}/image/IMG_6142.jpg`} alt="" /></Link>
                    <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
