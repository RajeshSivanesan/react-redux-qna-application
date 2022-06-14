import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteSVG from '../../../../assets/deleteSVG';
import EditSVG from '../../../../assets/editSVG';
import { removeAll, removeQuestion, sortQuestions } from '../../../../store/questions';
import { Contents, HoverTrigger, Tooltip } from '../../../common/Tooltip';
import EditQuestion from '../EditQuestion';
import './index.scss';

/**
 * Display of created questions
 */
function CreatedQuestions() {
    const createdQuestions = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const [showEditModal, setShowEditModal] = useState(false);
    const [editQuestion, setEditQuestion] = useState({});
    const [apiInvoked, setApiInvoked] = useState(false);
    const [sortApiInvoked, setSortApiInvoked] = useState(false);

    // to remove all questions
    const onRemoveAll = () => {
        if (createdQuestions.length === 0) {
            return;
        }

        const callback = () => {
            setApiInvoked(false);
        }
        setApiInvoked(true);
        dispatch(removeAll(callback));
    }

    // to do a sorting based on questionText alphabetically
    const onSort = () => {
        if (createdQuestions.length === 0) {
            return;
        }
        
        const callback = () => {
            setSortApiInvoked(false);
        }
        setSortApiInvoked(true);
        dispatch(sortQuestions(callback));
    }

    // to do a removal of a specific question
    const onRemoveQuestion = (id) => {
        dispatch(removeQuestion(id));
    }

    return (
        <Fragment>
            <Tooltip>
                <HoverTrigger>
                    <h2>Created Questions</h2>
                </HoverTrigger>
                <Contents>
                <div>
                    <p>Here you can find the created questions and their answers.</p>
                </div>
                </Contents>
            </Tooltip>
            {
                createdQuestions && createdQuestions?.map(createdQuestion => {
                    return (
                        <div key={createdQuestion.id} className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseOne-${createdQuestion.id}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapseOne-${createdQuestion.id}`}>
                                        {createdQuestion.questionText}
                                    </button>
                                </h2>
                                <div id={`panelsStayOpen-collapseOne-${createdQuestion.id}`} className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>{createdQuestion.answerText}</strong>
                                        <div>
                                            <button data-testid='editQuestion' onClick={() => { setShowEditModal(true); setEditQuestion(createdQuestion); }} type="button" className='btn'><EditSVG /></button>
                                            <button data-testid='removeQuestion' onClick={() => onRemoveQuestion(createdQuestion.id)} type="button" className='btn'><DeleteSVG /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                createdQuestions.length === 0 && (
                    <div className="alert alert-warning" role="alert">
                        No questions yet :-(
                    </div>
                )
            }
            <div className="hstack gap-3 mt-3 mb-5">
                <button data-testid="sortQuestions" type="button" onClick={onSort} className="btn btn-secondary">
                    {sortApiInvoked && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                    {` Sort Questions`}
                </button>
                <button data-testid="removeQuestions" type="button" onClick={onRemoveAll} className="btn btn-outline-danger">
                    {apiInvoked && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                    {` Remove Questions`}
                </button>
            </div>
            <EditQuestion setShow={setShowEditModal} show={showEditModal} questionDetails={editQuestion} setEditQuestion={setEditQuestion} />
        </Fragment>
    )
}

export default CreatedQuestions;
