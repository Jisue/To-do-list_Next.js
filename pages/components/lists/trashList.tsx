import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Restore from '../buttons/restore';
import DeleteTrash from '../buttons/deleteTrash';

const TrashList = ({ getlist }) => {
    return (
        <>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {getlist && getlist.map((list: { list_index: React.Key; list_name: React.ReactNode; list_status: React.ReactNode; list_date: React.ReactNode; list_memo: React.ReactNode; list_color: React.ReactNode; }) => (
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body" style={{ backgroundColor: "" + list.list_color }}>
                    <div key={list.list_index}>
                      <h3>{list.list_name}</h3>
                      <small className="text-muted">D-Day : {list.list_date}</small>
                      <br></br>
                      <br></br>
                      {/* <p>{list.list_color}</p> */}
                      <p className="card-text">{list.list_memo}</p>
                      <br></br>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Restore list_index = {list.list_index}></Restore>
                        <DeleteTrash list_index={list.list_index}></DeleteTrash>
                        </div>
                      <small className="text-muted">{list.list_status}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </>

    );
};

export default TrashList
