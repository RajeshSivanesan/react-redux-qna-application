import React from 'react';
import Modal from '../../../common/Modal';
import AddQuestion from '../AddQuestion';

/**
 * Modal displaying edit question content
 * @param {object} props Component props
 * @param {function} props.setShow To set the modal closure
 * @param {object} props.questionDetails Editing question details
 * @param {function} props.setEditQuestion Update edit question once the process is complete
 * @param {bool} props.show To close/open the modal
 */
function EditQuestion({ setShow, show, questionDetails, setEditQuestion }) {
    return (
        <Modal onClose={() => setShow(false)} show={show}>
            <AddQuestion mode='edit' onClose={() => setShow(false)} questionDetails={questionDetails} setEditQuestion={setEditQuestion} />
        </Modal>
    )
}

export default EditQuestion;
