import "../styles/Suggestion.scss";
import Profile from "./Profile";

function Suggestion () {
    return (
        <div className="Suggestion">
            <div className="titleContainer">
                <div className="title">회원님을 위한 추천</div>
                <a href="/">모두 보기</a>
            </div>

            <Profile 
            caption="Followed by mapvault + 3 more" 
            urlText="팔로우" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true}
            />
            <Profile 
            caption="Followed by mapvault + 1 more" 
            urlText="팔로우" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true}
            />
            <Profile 
            caption="Followed by mapvault + 7 more" 
            urlText="팔로우" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true}
            />
            <Profile 
            caption="Followed by mapvault + 6 more" 
            urlText="팔로우" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true}
            />
            <Profile 
            caption="Followed by mapvault + 4 more" 
            urlText="팔로우" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true}
            />
        </div>
    )
}

export default Suggestion;
