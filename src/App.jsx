import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navigation from './components/navigation/./Navigation.jsx';
import Home from "./pages/home/Home.jsx";
import NewBlog from "./pages/newblog/NewBlog.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Post from "./pages/posts/Post.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";


function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/nieuw-blog" element={<NewBlog/>}/>
                <Route path="/overzicht" element={<Overview/>}/>
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>

    )
}

export default App
