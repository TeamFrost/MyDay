import { firebase } from '../../../firebase/config';
import * as types from './goalsActionTypes';

export const watchGoalsData = (userId) => dispatch => {
    dispatch(goalsRequestStart());
    const goalsRef = firebase.firestore().collection('goals').doc(userId).collection('sub_goals');
    goalsRef.get()
        .then((querySnapshot) => {
            let goalsData = []
            querySnapshot.forEach(doc => {
                const goal = doc.data()
                goal.id = doc.id
                goalsData.push(goal)
            })
            dispatch(goalsRequestSuccess(goalsData))
        }),
        (error) => {
            dispatch(goalsRequestError(error))
        }
}

const goalsRequestStart = () => ({
    type: types.GOALS_REQUEST_START
});

const goalsRequestSuccess = goalsData => ({
    type: types.GOALS_REQUEST_SUCCESS,
    goalsData
});

const goalsRequestError = error => ({
    type: types.GOALS_REQUEST_ERROR,
    error
});
