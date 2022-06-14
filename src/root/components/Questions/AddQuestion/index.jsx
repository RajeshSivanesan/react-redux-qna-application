import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuestion, editQuestion } from '../../../../store/questions';
import { Contents, HoverTrigger, Tooltip } from '../../../common/Tooltip';
import './index.scss';

/**
 * Form to add/edit question
 * @param {object} props Component props
 * @param {bool} props.mode Identifies the flow - create | edit
 * @param {object} props.questionDetails Editing question details
 * @param {function} setEditQuestion Update edit question once the process is complete
 * @param {function} onClose Modal onClose in edit mode
 */
function AddQuestion({ mode, questionDetails, setEditQuestion, onClose }) {
    const [questionText, setQuestionText] = useState(questionDetails?.questionText || '');
    const [answerText, setAnswerText] = useState(questionDetails?.answerText || '');
    const [apiInvoked, setApiInvoked] = useState(false);
    const dispatch = useDispatch();

    const onCreate = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setApiInvoked(true);

        const callback = () => {
            setApiInvoked(false);
            if (questionDetails && mode === 'edit') {
                setEditQuestion({});
                onClose?.();
            }
            setAnswerText('');
            setQuestionText('');
        }

        if (questionDetails && mode === 'edit') {
            dispatch(editQuestion({
                id: questionDetails.id,
                questionText,
                answerText
            }, callback));
        } else {
            dispatch(createQuestion({
                questionText,
                answerText
            }, callback));
        }
    }

    const onQuestionTextChange = (event) => {
        setQuestionText(event.target.value);
    }

    const onAnswerTextChange = (event) => {
        setAnswerText(event.target.value);
    }

    return (
        <div className='mb-5'>
            <Tooltip>
                <HoverTrigger>
                    <h2>{`${mode === 'edit' ? 'Edit question' : 'Create a new question'}`}</h2>
                </HoverTrigger>
                <Contents>
                    <div>
                        <p>Here you can create/edit new questions and their answers.</p>
                    </div>
                </Contents>
            </Tooltip>
            <form className="needs-validation" onSubmit={onCreate}>
                <div className="form-group">
                    <label className='mb-2' htmlFor="questionText">Question</label>
                    <input data-testid="questionText" value={questionText} onChange={onQuestionTextChange} aria-required="true" required type="text" className="form-control" id="questionText" aria-describedby="questionHelp" placeholder="Enter question" />
                </div>
                <div className="form-group">
                    <label className='mb-2' htmlFor="answerText">Answer</label>
                    <input data-testid="answerText" value={answerText} onChange={onAnswerTextChange} aria-required="true" required type="text" className="form-control" id="answerText" placeholder="Enter Answer" />
                </div>
                <button data-testid="addEditSubmit" type="submit" className="btn btn-primary">
                    {apiInvoked && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                    {`${mode === 'edit' ? ' Edit' : ' Create'} Question`}
                </button>
            </form>
        </div>
    )
}

export default AddQuestion;
