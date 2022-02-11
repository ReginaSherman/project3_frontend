import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
function NewSpotifyHome() {
    const [searchKey, setSearchKey] = useState("")
    const [shows, setShows] = useState([])
    const getAPIToken = async () => {
    let client_id = process.env.CLIENT_ID
    let client_secret = process.env.CLIENT_SECRET
    let encodedToken = process.env.ENCODED_TOKEN //base64 encoded from client id and secret using https://www.base64encode.org/
    //FIX:  btoa() not working now...
    // window.btoa((client_id + ':' + client_secret))
    let url = 'https://accounts.spotify.com/api/token'
    let authOptions = {
        headers: {
        'Authorization': 'Basic ' + encodedToken
        },
        form: {
            grant_type: 'client_credentials'
            },
            json: true
        };
        const {data} = await axios.post(url, 'grant_type=client_credentials', authOptions);
        console.log(data)
        return data.access_token
}
//FIX:  access tokens are good for an hour, there may be limits on them.  Currently, every search is generating a new token...
//      see more notes at bottom...
    const searchShows = async (e) => {
        e.preventDefault()
        console.log("searchShows")
        const token = await getAPIToken()
        console.log(token)
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            params: {
                q: searchKey,
                type: "show",
                market: "US"    // don't let the endpoint docs fool you, this seems to be required (maybe just applies to shows?)
            }
        })
        setShows(data.shows.items)
    }
    const renderShows = () => {
        return shows.map(show => (
            <div key={show.id}>
                {show.images.length ? <img width={"10%"} src={show.images[0].url} alt=""/> : <div>No Image</div>}
                {show.name}
            </div>
        ))
    }
    return (
        <div className="App">
            <header className="App-header">
                    <form onSubmit={searchShows}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>
                {renderShows()}
            </header>
        </div>
    );
}
export default NewSpotifyHome;