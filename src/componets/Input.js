import { useState } from "react";

export default function Input(props) {
    const[formData, setFormData]=useState({
        searchterm: ""
    })
    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})}

        const handleSubmit=(event)=>{
            event.preventDefault()
            props.dailysearch(formData.searchterm)
            props.hourlysearch(formData.searchterm)
        }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                
                <input type="submit" value="search"/>
            </form>
</div>
    )
}
