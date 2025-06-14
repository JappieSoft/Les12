import "./Post.css";
import { useParams } from "react-router-dom";

function Post() {
    const { id } = useParams();

    return (
        <div className="page-container">
            <h1>Something!</h1>
            <div>Het productnummer is {id}</div>
        </div>

    );
}

export default Post;