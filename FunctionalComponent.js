import React ,{useState}from 'react';

function FunctionalComponent(props) {
    const [data,setData] = useState({
        name:"Functional Pradnya"
    })
    return (
        <div>
            <h2>Functional Component</h2>
            <h2> My Name is {data.name}</h2>
        </div>
    );
}

export default FunctionalComponent;