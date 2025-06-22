import "./Overview.css";
import {useEffect} from "react";
import InfoCard from "../../components/Infocard/InfoCard.jsx"
import pullHelperApi from "../../helpers/apiScripts.js";
import {useState} from "react"


function Overview() {
    const [apiData, setApiData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        console.log("It's mounted");
        pullHelperApi(setError, setApiData, toggleLoading);
    }, []);

    console.log(apiData);

    return (
        <div className="page-container">

            <h1>Een overzicht van onze blogs:</h1>
            {loading && <p>Loading...</p>}
            {error && <h2 className="error">{error}</h2>}

            {apiData.length > 0 &&
            <ul className="list-view">
                {apiData.map((data) => (
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
            }
        </div>
    );
}

export default Overview;