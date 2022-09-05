import "../styles/Story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="Story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <div className="accountName">{accountName}</div>
    </div>
  );
}

export default Story;