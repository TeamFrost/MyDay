import { firebase } from '../../../firebase/config';
import * as types from './eventsActionTypes';

export const watchEventsData = (userId) => dispatch => {
    dispatch(eventsRequestStart());
    const eventsRef = firebase.firestore().collection('events').doc(userId).collection('sub_events')
    eventsRef.get()
        .then((querySnapshot) => {
            let eventsData = []
            querySnapshot.forEach(doc => {
                const event = doc.data()
                event.id = doc.id
                eventsData.push(event)
            })
            dispatch(eventsRequestSuccess(eventsData))
        }),
        (error) => {
            dispatch(eventsRequestError(error))
        }
}

const eventsRequestStart = () => ({
    type: types.EVENTS_REQUEST_START
});

const eventsRequestSuccess = eventsData => ({
    type: types.EVENTS_REQUEST_SUCCESS,
    eventsData
});

const eventsRequestError = error => ({
    type: types.EVENTS_REQUEST_ERROR,
    error
});
