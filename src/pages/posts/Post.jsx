import "./Post.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import posts from "../../constants/data.json"
import dateConverter from "../../helpers/dateConverter.js";

function Post() {
    const { id } = useParams();
    const data = posts[id-1];

    return (
        <div className="page-container">
            <h1>{data.title} ({data.readTime} minuten)</h1>
            <h2>{data.subtitle}</h2>
            <p>Geschreven door {data.author} op {dateConverter(data.created)}</p>
            <p className="data-content">{data.content}</p>
            <p>{data.comments} reacties - {data.shares} keer gedeeld</p>
            <Link className="post-link" to="/overzicht">Terug naar de overzichtspagina</Link>
        </div>

    );
}

export default Post;