import React, { useState } from 'react';
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
    // documentation at https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    // curl -H "Authorization: 563492ad6f917000010000019ad4875fd9524300a8444f27cb7529de" \
    // "https://api.pexels.com/v1/search?query=people"
    let pexelsApiKey = '563492ad6f917000010000019ad4875fd9524300a8444f27cb7529de';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
}

    function handleSubmit(event) {
        event.preventDefault();

         search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search('welcome');
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." />
                </form>
                </section>
                <hr />
                <Results results={results} />
                <Photos photos={photos} alt={keyword} />
                <hr />
            </div>
        )
    } else {
        load();
        return "Loading";
    }
    
}