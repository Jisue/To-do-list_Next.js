import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Done = ({ list_index }) => {

    const handleClick = (e) => {

        if (confirm("상태처리") === false) {
            return;
        }

        const updateRequest = async () => {
            try {
                const response1 = await axios({
                    method: 'put',
                    url: 'http://localhost:3001/todos/'+list_index,
                    params: {
                        status : 'Done'
                    },
                })
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        updateRequest();

        location.reload();
    }
    return (
        <>
        <button className ="btn.btn-sm.btn-outline-secondary" type='button' onClick={handleClick}>&nbsp;&nbsp;&nbsp;</button>
        </>

    );
};

export default Done