import "../styles/Stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";

function Stories() {
  return (
    <div className="Stories">
      <HorizontalScroll className="Scroll" reverseScroll={true}>
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
      </HorizontalScroll>
    </div>
  );
}

export default Stories;
/* <ScrollHorizontal className="scroll" reverseScroll={true}></ScrollHorizontal> */
