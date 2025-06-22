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
export async function deleteNumberOne(requestId, setError, setApiData, toggleLoading) {
    setError("");
    toggleLoading(true);

    try {
        const response = await axios.delete(`${apiLink}/${requestId}`, {
            headers: apiHeaders,
        });
        console.log(response);
        setApiData(response);
    } catch (event) {
        console.error(event);
        setError("Er is wat fout gegaan met verwijderen!");
    } finally {
        toggleLoading(false);
    }
}

/*---end of api actions ------------------------------------------------------------------------------------------------------*/
export default pullHelperApi;