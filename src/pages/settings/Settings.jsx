import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Your Account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={`${process.env.PUBLIC_URL}/image/IMG_6216.jpg`} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Genki" />
                    <label>Email</label>
                    <input type="email" placeholder="genki@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
