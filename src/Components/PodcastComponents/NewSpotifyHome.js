import React, {useState} from "react";
import axios from 'axios';
import SpotifyCards from './SpotifyCards'
import './SpotifySearch.css'

const NewSpotifyHome = () => {
    const [searchKey, setSearchKey] = useState("")
    const [shows, setShows] = useState([])

    const getAPIToken = async () => {

    // let client_id = "297f99b5025a4a0da6890d276fe9cf77"
    // let client_secret = "51915046cd354cdb84928604fe040e92"
    let encodedToken = "Mjk3Zjk5YjUwMjVhNGEwZGE2ODkwZDI3NmZlOWNmNzc6NTE5MTUwNDZjZDM1NGNkYjg0OTI4NjA0ZmUwNDBlOTI"//base64 encoded from client id and secret using https://www.base64encode.org/
    //FIX:  btoa() not working now...
    // window.btoa((client_id + ':' + client_secret))
    console.log(encodedToken)
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
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: {
            q: searchKey,
            type: "show",
            market: "US", // don't let the endpoint docs fool you, this seems to be required (maybe just applies to shows?)
          },
        });
        setShows(data.shows.items)
    }
    console.log(shows)
    const renderShows = () => {
    return(
            <>
             {shows.map((show) => {
                return( 
                     <SpotifyCards key={show.id} {...show}/>
                )
             })}
            </>
        )
    }
    
    return (
        <div className="search-bar">
            <header>
                    <form className="search-form" onSubmit={searchShows}>
                        <input type="text" placeholder="Podcast Name" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search Spotify</button>
                    </form>
                {renderShows()}
            </header>
        </div>
    );
}
export default NewSpotifyHome;