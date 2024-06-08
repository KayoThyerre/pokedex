import React, {useState} from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito");
    const {onSearch} = props;

    const onChangeHandler = (e) => {
        setSearch (e.target.value);
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onButtonClickHandler();
        }
    };
   
    return (
        <div className="searchbar-container">
            <div className="searchbar"> 
                <input 
                placeholder="Buscar Pokemon" 
                value={search}
                onChange={onChangeHandler}
                onKeyPress={handleKeyPress}
                />
            </div>
            <div className="search-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
};

export default Searchbar;