import {useState} from 'react';

const Application = () => {
    const [data, setData] = useState([]);
    fetch("http://localhost:3000/todos")
        .then(d => d.json())
        .then(d => setData(d))
        .catch(err => console.log(err));
    return (
        <div>
            hello !
        </div>
    );
}

export default Application;