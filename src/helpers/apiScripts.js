import axios from "axios";

const apiLink = "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts";
const apiHeaders = {"novi-education-project-id": "e7334bb5-32f1-462b-a9d0-349bb821c0ba"};

/*---api pull 1.1 ------------------------------------------------------------------------------------------------------*/
async function pullHelperApi(setError, setApiData, toggleLoading) {
    setError("");
    toggleLoading(true);

    try {
        const response = await axios.get(apiLink, {
            headers: apiHeaders,
        });
        console.log(response);
        setApiData(response.data);
    } catch (err) {
        console.error(err);
        setError("Er ging iets fout gegaan bij het ophalen van de data.");
    } finally {
        toggleLoading(false);
    }
}


/*---api pull id 1.2 ------------------------------------------------------------------------------------------------------*/
export async function pullIdNumber(requestId, setError, setApiData, toggleLoading) {
    setError("");
    toggleLoading(true);

    try {
        const response = await axios.get(apiLink, {
            headers: apiHeaders,
            params: {"id": requestId}
        });
        console.log(response);
        setApiData(response.data);
    } catch (event) {
        console.error(event);
        setError("Het artikel is helaas niet gevonden.");
    } finally {
        toggleLoading(false);
    }
}

/*---api push 1.3 ------------------------------------------------------------------------------------------------------*/
export async function pushNumberOne(dataPush, setError, setApiData, toggleLoading) {
    setError("");
    toggleLoading(true);

    console.log(dataPush);

    try {
        const response = await axios.post(
            apiLink,
            {
                title: dataPush.title,
                subtitle: dataPush.subtitle,
                content: dataPush.content,
                created: dataPush.created,
                author: dataPush.author,
                readTime: dataPush.readTime,
                comments: dataPush.comments,
                shares: dataPush.shares,
            },
            {
                headers: apiHeaders,
            }
        );
        setApiData(response.data);
        console.log(response);
    } catch (event) {
        console.error(event);
        setError("Er is iets fout gegaan met het versturen van de blogpost.");
    } finally {
        toggleLoading(false);
    }
}

/*---api delete 1.5 ------------------------------------------------------------------------------------------------------*/
export async function deleteNumberOne() {
    const [count, setCount] = useState(0)
    const [apiData, setApiData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);
    const dataPush = {
        "title": "Wat gebruiker heeft ingevuld",
        "subtitle": "Wat gebruiker heeft ingevuld",
        "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
        "author": "Voornaam achternaam",
        "created": "2023-09-21T09:30:00Z",
        "readTime": 1,
        "comments": 0,
        "shares": 0
    };


    setError("");
    toggleLoading(true);
    setCount((count) => count + 1)

    try {
        const response = await axios.delete(
            "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/21",
            {
                headers: {
                    "novi-education-project-id": "e7334bb5-32f1-462b-a9d0-349bb821c0ba"
                }
            }
        );
        console.log(response);
    } catch (event) {
        console.error(event);
        setError("Delete Error or Impossible");
    } finally {
        toggleLoading(false);
    }
}

/*---api put 1.6 ------------------------------------------------------------------------------------------------------*/
export async function putNumberOne() {
    const [count, setCount] = useState(0)
    const [apiData, setApiData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);
    const dataPush = {
        "title": "Wat gebruiker heeft ingevuld",
        "subtitle": "Wat gebruiker heeft ingevuld",
        "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
        "author": "Voornaam achternaam",
        "created": "2023-09-21T09:30:00Z",
        "readTime": 1,
        "comments": 0,
        "shares": 0
    };


    setError("");
    toggleLoading(true);
    setCount((count) => count + 1)

    try {
        const response = await axios.put(
            "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/27",
            {
                id: "27",
                title: "Wat is anders?",
                subtitle: "Wat heeft de gebruiker ingevuld",
                content: "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden maar nu toch een paar meer",
                created: "2023-09-21T19:31:22Z",
                author: "Achternaam voornaam",
                readTime: 55,
                comments: 783264832,
                shares: 9876233286,
            },
            {
                headers: {
                    "novi-education-project-id": "e7334bb5-32f1-462b-a9d0-349bb821c0ba"
                }
            }
        );
        console.log(response);
    } catch (event) {
        console.error(event);
        setError("Put Error");
    } finally {
        toggleLoading(false);
    }
}

/*---api patch 1.7 ------------------------------------------------------------------------------------------------------*/
export async function patchNumberOne() {
    const [count, setCount] = useState(0)
    const [apiData, setApiData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);
    const dataPush = {
        "title": "Wat gebruiker heeft ingevuld",
        "subtitle": "Wat gebruiker heeft ingevuld",
        "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
        "author": "Voornaam achternaam",
        "created": "2023-09-21T09:30:00Z",
        "readTime": 1,
        "comments": 0,
        "shares": 0
    };


    setError("");
    toggleLoading(true);
    setCount((count) => count + 1)

    try {
        const response = await axios.patch(
            "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/27",
            {
                id: "27",
                title: "Weer iets anders?"
            },
            {
                headers: {
                    "novi-education-project-id": "e7334bb5-32f1-462b-a9d0-349bb821c0ba"
                }
            }
        );
        console.log(response);
    } catch (event) {
        console.error(event);
        setError("Patch Error");
    } finally {
        toggleLoading(false);
    }
}


/*---end of api pull"s ------------------------------------------------------------------------------------------------------*/
export default pullHelperApi;