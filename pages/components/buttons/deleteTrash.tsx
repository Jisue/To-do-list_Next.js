import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const DeleteTrash = ({ list_index }) => {

    const handleDelete = (delete_index) => {

        if (confirm("영구 삭제 됩니다.") === false) {
          return;
        }
    
        const trashRequest = async () => {
          console.log(delete_index + "영구 삭제");
          try {
            const response1 = await axios({
              method: 'delete',
              url: 'http://localhost:3001/trashs/' + delete_index,
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

export default DeleteTrash