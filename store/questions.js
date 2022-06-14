import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: [],
    reducers: {
        loadInitialState: (state, action) => {
            return action.payload;
        },
        updateRemoveAllQuestions: (state) => {
            state.splice(0, state.length);
        },
        updateSortQuestions: (state) => {
            const questions = [...state];
            const sortedQuestions = questions.sort((a, b) => a.questionText.toLowerCase().localeCompare(b.questionText.toLowerCase()));
            return sortedQuestions;
        },
        updateCreatedQuestion: (state, action) => {
            const newQuestion = action.payload;
            const maxId = state.reduce(
                (max, question) => (question?.id > max ? question?.id : max),
                state[0] ? state[0].id : 0
            );
            const newQuestionWithId = {
                id: maxId + 1,
                ...newQuestion,
            }

            state.push(newQuestionWithId);
        },
        removeQuestion: (state, action) => {
            const questionId = action.payload;
            return state.filter(question => question.id !== questionId);
        },
        updateEditQuestion: (state, action) => {
            const { id } = action.payload;
            return state.map(question => {
                if (question.id === id) {
                    return action.payload;
                }
                return question
            })
        }
    },
})

/**
 * @note side-effect used to create a question with a delay of 5 seconds.
 * @param {object} data The question data to be created.
 * @param {function} callback The callback to be invoked once promise is resolved.
 */
export const createQuestion = (data, callback) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(updateCreatedQuestion(data));
                resolve();
                callback?.();
            }, 5000);
        })
    }
}

/**
 * @note side-effect used to remove all questions with a delay of 3 seconds.
 * @param {function} callback The callback to be invoked once promise is resolved.
 */
export const removeAll = (callback) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(updateRemoveAllQuestions());
                resolve();
                callback?.();
            }, 3000);
        })
    }
}

/**
 * @note side-effect used to edit a questions with a delay of 3 seconds.
 * @param {object} data The question data to be edited.
 * @param {function} callback The callback to be invoked once promise is resolved.
 */
export const editQuestion = (data, callback) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(updateEditQuestion(data));
                resolve();
                callback?.();
            }, 3000);
        })
    }
}

/**
 * @note side-effect used to sort questions with a delay of 3 seconds.
 * @param {function} callback The callback to be invoked once promise is resolved.
 */
export const sortQuestions = (callback) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(updateSortQuestions());
                resolve();
                callback?.();
            }, 3000);
        })
    }
}

// Action creators are generated for each case reducer function
export const { removeQuestion, updateSortQuestions, updateCreatedQuestion, updateRemoveAllQuestions, updateEditQuestion, loadInitialState } = questionsSlice.actions

export default questionsSlice.reducer;