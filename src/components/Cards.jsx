import "../styles/Cards.scss";
import Stories from "./Stories";
import Card from "./Card";


function Cards() {
  const date = new Date();
  const commentsOne = [
    {
      user: "arrumii2__",
      text: "arrumii2__",
      id: 1,
    },
    {
      user: "sean__lhj",
      text: "sean__lhj",
      id: 2,
    },
    {
      user: "didoodah__",
      text: "didoodah__",
      id: 3,
    },
  ];
  const commentsTwo = [
    {
      user: "jichew_chew",
      text: "jichew_chew",
      id: 4,
    },
  ];
  const commetsThree = [
    {
      user: "ji_hyun3568",
      text: "ji_hyun3568",
      id: 5,
    },
  ];
  return (
    <div className="Cards">
      <Stories />

      <Card
        accountName="sssaaaa"
        storyBorder={true}
        image="https://picsum.photos/600/500"
        comments={commentsOne}
        likedByText="allwing"
        likedByNumber={89}
        hours={date.getHours()}
      />
    </div>
  );
}


export default Cards;
