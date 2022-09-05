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
<<<<<<< HEAD
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
=======
      <Home clssName="icon" />
      <Inbox clssName="icon" />
      <Explore clssName="icon" />
      <Notifications clssName="icon" />
>>>>>>> 2aad8d9972241fd181080973bc53b532275aef25
      <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
}

export default Menu;
