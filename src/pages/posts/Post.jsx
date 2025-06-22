import "./Post.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dateConverter from "../../helpers/dateConverter.js";
import {ArrowCircleLeftIcon} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import {pullIdNumber} from "../../helpers/apiScripts.js";

function Post() {
    const { id } = useParams();
    const requestId = id;

    const [apiData, setApiData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        pullIdNumber(requestId, setError, setApiData, toggleLoading);
    }, []);

    return (
        <div className="page-container">
            {loading && <p>Loading...</p>}
            {error &&
                <div>
                <h2 className="error">{error}</h2>
                <Link className="post-link" to="/overzicht"><ArrowCircleLeftIcon size={26} />Terug naar de overzichtspagina</Link>
                </div>}

            {apiData.length > 0 &&
            <div className="page-container">
            <h1>{apiData[0].title} ({apiData[0].readTime} minuten)</h1>
            <h2>{apiData[0].subtitle}</h2>
            <p>Geschreven door {apiData[0].author} op {dateConverter(apiData[0].created)}</p>
            <p className="data-content">{apiData[0].content}</p>
            <p>{apiData[0].comments} reacties - {apiData[0].shares} keer gedeeld</p>
                <Link className="post-link" to="/overzicht"><ArrowCircleLeftIcon size={26} />Terug naar de overzichtspagina</Link>
            </div>}
        </div>

    );
}

export default Post;