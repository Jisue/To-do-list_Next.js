import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Delete = ({ list_index }) => {

    const handleDelete = (delete_index) => {

        const trashRequest = async () => {
            console.log(delete_index + "휴지통");
            try {
                const response1 = await axios({
                    method: 'delete',
                    url: 'http://localhost:3001/todos/' + delete_index,
                    params: {
                        list_index: delete_index,
                    },
                })
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        trashRequest();
        location.reload();
    }
    
    return (
        <>
                                 <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleDelete(list_index)}>Delete</button>
        </>

    );
};

export default Delete