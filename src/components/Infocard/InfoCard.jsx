import "./InfoCard.css";
import { NavLink } from "react-router-dom";

function InfoCard({blogId, title, author, comments, shares}) {

  return (
    <li className="list-item">
      <p><NavLink className="list-link" to={`/post/${blogId}`}>{title}</NavLink> ({author})</p>
      <p>{comments} reacties - {shares} keer gedeeld</p>
    </li>
  )
}

export default InfoCard;
