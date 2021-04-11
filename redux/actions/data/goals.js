import { firebase } from '../../../firebase/config';
import * as types from './actionTypes';

export const watchGoalsData = (userId) => dispatch => {
    dispatch(requestStart());
    const reportsRef = firebase.firestore().collection('goals').doc(userId).collection('sub_goals');
    reportsRef
        .onSnapshot(querySnapshot => {
            let goalsData = []
            querySnapshot.forEach(doc => {
                const goal = doc.data()
                goal.id = doc.id
                goalsData.push(goal)
            })
            dispatch(requestSuccess(goalsData))
        }),
        (error) => {
            dispatch(requestError(error))
        }
}


const requestStart = () => ({
    type: types.REQUEST_START
});

const requestSuccess = goalsData => ({
    type: types.REQUEST_SUCCESS,
    goalsData
});

const requestError = error => ({
    type: types.REQUEST_ERROR,
    error
});
