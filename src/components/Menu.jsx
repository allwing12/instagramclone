import "../styles/Menu.scss";
import {ReactComponent as Home} from "../Images/home.svg";
import {ReactComponent as Inbox} from "../Images/Inbox.svg";
import {ReactComponent as Explore} from "../Images/Explore.svg";
import {ReactComponent as Notifications} from "../Images/Notifications.svg";
import image from "../Images/profile.jpg";
import ProfileIcon from "./ProfileIcon";


function Menu () {
    return(
        <div className="menu">
            <Home clssName="icon" />
            <Inbox clssName="icon" />
            <Explore clssName="icon" />
            <Notifications clssName="icon" />
            <ProfileIcon iconSize="small" image={image} storyBorder={true} />    
            </div>
    )
}

export default Menu;