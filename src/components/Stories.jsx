import "../styles/Stories.scss";
// import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";

function Stories () {
    return (
        <div className = "Stories">
            {/* <HorizontalScroll className = "scroll" reverseScroll={true}> */}
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                {/* </HorizontalScroll> */}
        </div>

    )
}

export default Stories;