import React, {useState} from "react";
function Form({handleSearch}){

    const [query, setQuery] = useState("");
  
    const handleChange = (event) =>{
        setQuery(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        handleSearch(query);
    }

    return (
       <>
        <div className="container mt-36 mx-auto">
            <div className="border-2 border-green-500 rounded-full w-[80%] md:w-[500px] mx-auto p-1 overflow-hidden">
                <form onSubmit={handleSubmit} className="flex">
                <input type="text"
                placeholder="Search film..."
                value={query}
                onChange={handleChange}
                className="py-3 bg-[#010d23]  w-full rounded-lg px-5 text-white"
                />
                <button className="bg-green-500 text-white px-5 py-2 rounded-full" type="submit">Search</button>
                </form>
            </div>
        </div>
       </>
    )
}

export default Form