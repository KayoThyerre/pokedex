import React from "react";

const Searchbar = () => {
    const search = "charizard"
    const onChangeHandler = (e) => {
        console.log("Pokemon: ", e.target.value)
        search = e.target.value
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar"> 
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
        </div>
    )
};

export default Searchbar;