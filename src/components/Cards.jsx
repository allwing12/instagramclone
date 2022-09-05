import "../styles/Cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards () {
    const commentsOne = [
        {
            user : "sssaaaa",
            text: "waskkks",
            id : 1,
        },
        {
            user : "sssaada",
            text: "waskkkd",
            id : 2,
        },
        {
            user : "sssaaaff",
            text: "waskkkff",
            id : 3,
        },
    ];
    const commentsTwo =[

    
        {
            user : "sssaaadd",
            text: "waskkssk",
            id : 4,
        },
    ];
    const commetsThree = [
        {
            user : "ssaasaaa",
            text: "waaskkk",
            id : 5,
        },
    
    ];
    return (
        <div className = "Cards">
            <Stories />

            <Card 
            accountName="sssaaaa" 
            storyBorder={true} 
            image="https://picsum.photos/800/900" 
            comments={commentsOne} 
            likedByText="waskkks" 
            likedByNumber={89} 
            hours={16}
            />
        </div>
    )
}

export default Cards;