import React from 'react';
import { QuestionsIntroText } from '../../../constants';
import AddQuestion from './AddQuestion';
import CreatedQuestions from './CreatedQuestions';
import './index.scss';

/**
 * Questions Component Wrapper
 * @returns React.Component
 */
function Questions() {
    return (
        <div className='col-xs-12 col-sm-12 col-md-8' style={{ textAlign: 'left' }}>
            <p>{QuestionsIntroText}</p>
            <CreatedQuestions />
            <AddQuestion />
        </div>
    )
}

export default Questions;
