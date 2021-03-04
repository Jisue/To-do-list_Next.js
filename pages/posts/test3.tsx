import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from '../components/modal';
import Edit from '../components/edit';

function Open() {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(undefined);

    const openModal = () => {
        setModalOpen(1);
    }
    const closeModal = () => {
        setModalOpen(0);
    }

    return (
        <>
            <div>
                <button onClick={openModal}>
                    Open
                </button>
                <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
                </Modal>
            </div>

        </>
    )
}

export default Open