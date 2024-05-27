import React, {useState} from "react";

const Searchbar = () => {
    const [search, setSearch] = useState("dito");

    const onChangeHandler = (e) => {
        console.log("Pokemon: ", e.target.value)
        setSearch (e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("Pokemon: ", search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar"> 
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="search-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
};

export default Searchbar;