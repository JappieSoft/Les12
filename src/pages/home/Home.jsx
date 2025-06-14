import "./Home.css";
import logo from "../../assets/logo-white.png";

function Home() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Welcome Home!</h1>
        </div>
    );
}

export default Home;