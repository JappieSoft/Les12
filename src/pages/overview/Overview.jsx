import "./Overview.css";
import posts from "../../constants/data.json"
import InfoCard from "../../components/infocard/InfoCard.jsx"

function Overview() {
    return (
        <div className="page-container">

            <h1>Een overzicht van onze blogs:</h1>
            <ul className="list-view">
            {posts.map((data) => (
            <InfoCard
                key={data.id}
                blogId={data.id}
                title={data.title}
                author={data.author}
                comments={data.comments}
                shares={data.shares}
            />
            ))}
            </ul>
        </div>
    );
}

export default Overview;