import "../styles/Card.scss";
import Profile from "./Profile";
// import { ReactComponent as CardButton } from "../Images/CardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;
  return (
    <div className="Card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        {/* <CardButton className="CardButton" /> */}
      </header>
      <img className="CardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          <strong>{likedByText}</strong>님 외{" "}
          <strong>{likedByNumber}명이 좋아합니다</strong>
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
      <div className="timePosted">{hours} 시간 전</div>
      <div className="addComment">
        <div className="commentText">댓글 모두 보기</div>
        <div className="postText">쓰기</div>
      </div>
    </div>
  );
}
export default Card;
