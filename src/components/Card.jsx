import "../styles/Card.scss";
import Profile from "./Profile";
import {ReactComponent as CardButton} from "../git Images/CardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card (props) {
const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
} = props;
    return (
        <div className="Card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder} />
                <CardButton className="CardButton" />
            </header>
            <img className="CardImage" src={image} alt="card content" />
            <CardMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true} />
                <span>
                    Liked by <strong>{likedByText}</strong> and{" "} 
                    <strong>{likedByNumber} others</strong>
                </span>
            </div>
            <div className="comments">
                {comments.map((comment) => {
                    return (
                        <Comment 
                        key={comment.id}
                        accountName={comment.user}
                        comment={comment.text} 
                        />
                    );
                })}
            </div>
            <div className="timePosted">{hours} HOURS AGO</div>
            <div className="addComment">
                <div className="commentText">Add a Comment...</div>
                <div className="postText">POST</div>
            </div>
        </div>
    )
}

export default Card;