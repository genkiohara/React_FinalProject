import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src={`${process.env.PUBLIC_URL}/image/IMG_6216.jpg`}
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus commodi nobis optio voluptatem.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Blog</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">Nature</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarItem">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-spotify"></i>
                </div>
            </div>
        </div>
    )
}
