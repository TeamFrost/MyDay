import { firebase } from '../../../firebase/config';
import * as types from './actionTypes';

export const watchEventsData = (userId) => dispatch => {
    dispatch(requestStart());
    const reportsRef = firebase.firestore().collection('events').doc(userId).collection('sub_events')
    reportsRef.get()
        .then((querySnapshot) => {
            let eventsData = []
            querySnapshot.forEach(doc => {
                const event = doc.data()
                event.id = doc.id
                eventsData.push(event)
            })
            dispatch(requestSuccess(eventsData))
        }),
        (error) => {
            dispatch(requestError(error))
        }
}

const requestStart = () => ({
    type: types.REQUEST_START
});

const requestSuccess = eventsData => ({
    type: types.REQUEST_SUCCESS,
    eventsData
});

const requestError = error => ({
    type: types.REQUEST_ERROR,
    error
});
