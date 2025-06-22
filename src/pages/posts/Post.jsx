import "./Post.css";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import dateConverter from "../../helpers/dateConverter.js";
import {ArrowCircleLeftIcon, ArrowCircleRightIcon, ClockIcon} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import {deleteNumberOne, pullIdNumber} from "../../helpers/apiScripts.js";

function Post() {
    const {id} = useParams();
    const requestId = id;
    const [apiData, setApiData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        pullIdNumber(requestId, setError, setApiData, toggleLoading);
    }, []);

    function deletePost(){
        console.log(`requestId = ${requestId}`);
        deleteNumberOne(requestId, setError, setApiData, toggleLoading);
        console.log(apiData);
    };

    return (
        <div className="page-container">
            {loading && <p>Post ophalen...</p>}
            {error &&
                <div>
                    <h2 className="error">{error}</h2>
                    <Link className="post-link" to="/overzicht"><ArrowCircleLeftIcon size={26}/>Terug naar de
                        overzichtspagina</Link>
                </div>}

            {apiData.length === 0 && loading === false &&
                <div className="page-container">
                    <h2 className="error">Post niet gevonden!</h2>
                    <Link className="post-link" to="/overzicht"><ArrowCircleLeftIcon size={26}/>Terug naar de
                        overzichtspagina</Link>
                </div>}

            {apiData.status === 204 &&
                <div className="page-container">
                    <h2>Verwijderen succesvol!</h2>
                    <Link className="post-link" to="/overzicht"><ArrowCircleLeftIcon size={26}/>Terug naar de
                        overzichtspagina</Link>
                </div>}


            {apiData.length > 0 &&
                <div className="page-container">
                    <h1>{apiData[0].title} </h1>
                    <h2>{apiData[0].subtitle}</h2>
                    <p><ClockIcon size={16} /> Leestijd is {apiData[0].readTime} minuten</p>
                    <p>Geschreven door {apiData[0].author} op {dateConverter(apiData[0].created)}</p>
                    <p className="data-content">{apiData[0].content}</p>
                    <p>{apiData[0].comments} reacties - {apiData[0].shares} keer gedeeld</p>
                    <span className="link-space">
                        <Link className="post-link" to="/overzicht"><ArrowCircleLeftIcon size={26}/>Terug naar de overzichtspagina</Link>
                        <a className="post-link" id="delete" onClick={deletePost}>Delete this Post<ArrowCircleRightIcon
                            size={26}/></a>
                </span>
                </div>}

</div>

    );
}

export default Post;