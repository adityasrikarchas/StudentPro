import Icon from "../Icon";
import "./style.css";
import KeyboardArrowDown from "../../assets/svgs/KeyboardArrowDown.svg";
import NotificationsIcon from "../../assets/svgs/Notifications.svg";

const Profile = ({userName, userAvatar}) => {
    return (
        <div className="profile-menu">
            <div className="notifications">
                <Icon icon={NotificationsIcon}/>
            </div>
            <div className="user-profile">
                <Icon icon={userAvatar} style={{width: "40px", height: "40px"}}/>
                <p>{userName}</p>
                <Icon icon={KeyboardArrowDown}/>
            </div>
        </div>
    )
}

export default Profile;