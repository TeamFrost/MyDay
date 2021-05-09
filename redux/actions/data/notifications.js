import { firebase } from '../../../firebase/config';
import * as types from './notificationsActionTypes';

export const watchNotificationsData = (userId) => dispatch => {
    dispatch(notificationsRequestStart());
    const notificationsRef = firebase.firestore().collection('notifications');
    notificationsRef.where("friend", "==", userId).get()
        .then((querySnapshot) => {
            let notificationsData = []
            querySnapshot.forEach((doc) => {
                let notification = doc.data()
                notification.id = doc.id
                notificationsData.push(notification)
            });
            dispatch(notificationsRequestSuccess(notificationsData))
        })
        .catch((error) => {
            dispatch(notificationsRequestError(error))
        });
    dispatch(notificationsRequestSuccess([]))
}

const notificationsRequestStart = () => ({
    type: types.NOTIFICATIONS_REQUEST_START
});

const notificationsRequestSuccess = notificationsData => ({
    type: types.NOTIFICATIONS_REQUEST_SUCCESS,
    notificationsData
});

const notificationsRequestError = error => ({
    type: types.NOTIFICATIONS_REQUEST_ERROR,
    error
});
