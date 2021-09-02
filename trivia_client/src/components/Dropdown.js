import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import '../CSS/DropDown.css';

const GET_DROPDOWN = gql `
query DropDownList {
    categories {
        id
        category
    }
}`



export default function Dropdown(props) {
    const { loading, error, data } = useQuery(GET_DROPDOWN);
    
    function handleChange(e) {
        props.onChange(e.target.value)
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

   
    return (
        <div className="selectContainer">
             <h4>Choose a category</h4>
             <div className="catSelectContainer">
                <select name="cat"  defaultValue={ props.value } onChange={ handleChange }>
                    {data.categories.map(cat => (
                        <option key={cat.id} value={cat.category}>
                            {cat.category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}



export {Dropdown}
