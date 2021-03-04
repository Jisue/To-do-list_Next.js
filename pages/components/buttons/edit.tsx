//useState를 사용하기 위하여 import
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from '../modal';

function Edit({ getlist }) {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(undefined);

    const openModal = (list) => {
        setModalOpen(list);
    }
    const closeModal = () => {
        setModalOpen(undefined);
        location.reload();
    }

    return (
        <>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => openModal(getlist)}>Edit</button>
            <Modal open={modalOpen} close={closeModal} header="Edit Todo">
            </Modal>
        </>
    )
}

export default Edit