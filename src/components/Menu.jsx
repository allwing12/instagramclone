import "../styles/Menu.scss";
import { ReactComponent as Home } from "../Images/home.svg";
import { ReactComponent as Inbox } from "../Images/Inbox.svg";
import { ReactComponent as Explore } from "../Images/Explore.svg";
import { ReactComponent as Notifications } from "../Images/Notifications.svg";
import image from "../Images/profile.jpg";
import ProfileIcon from "./ProfileIcon";

function Menu() {
  return (
    <div className="Menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
      <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
}

export default Menu;