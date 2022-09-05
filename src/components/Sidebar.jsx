import "../styles/Sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import image from "../Images/profile.jpg"

function Sidebar () {
    return (
        <Sticky topOffset={-80}>
            <div className="Sidebar">
                <Profile 
                username="94_ykm" 
                caption="유경민 " 
                urlText="전환" 
                iconSize="big" 
                image={image}
                 />
                 <Suggestion />
                 <Footer />
            </div>
        </Sticky>
    );
}

export default Sidebar;