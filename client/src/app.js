import {useEffect, useState} from 'react';
import axios from 'axios';

const Application = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/todos")
        .then(d => setData(d))
        .catch(err => console.log(err));
        console.log(data)
    }, [data]);
    
    return (
        <div>
            hello !
            
        </div>
    );
}

export default Application;