import { firebase } from '../../../firebase/config';
import * as types from './actionTypes';

export const restoreSession = () => dispatch => {
    dispatch(sessionStart());
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            usersRef
                .doc(user.uid)
                .get()
                .then((document) => {
                    const userData = document.data()
                    dispatch(sessionSuccess(userData));
                })
                .catch((error) => {
                    dispatch(sessionError(error));
                });
        } else {
            dispatch(sessionLogout());
        }
    });
};

export const loginUser = (email, password) => dispatch => {
    dispatch(sessionStart());
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    console.log("Succes!")
                    dispatch(sessionSuccess(user))
                })
                .catch(error => {
                    dispatch(sessionError(error));
                });
        })
        .catch(error => {
            alert(error)
        })
};

export const loginUserWithGoogle = (googleUser) => dispatch => {
    dispatch(sessionStart());
    // console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        let uid = ""
        if (firebaseUser != null) {
            uid = firebaseUser.uid
        }
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
            );
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential)
                .then(() => {
                    console.log("user signed in")
                    const user = {
                        id: uid,
                        email: firebaseUser.email,
                        username: firebaseUser.displayName,
                        profile: firebaseUser.photoURL,
                        google: true
                    };
                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(user)
                        .then(() => {
                            console.log("Cont creat!")
                            dispatch(sessionSuccess(user))
                        })
                        .catch((error) => {
                            dispatch(sessionError(error.message));
                        });
                })
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                    dispatch(sessionError(errorMessage))
                });
        } else {
            console.log('User already signed-in Firebase.');
            firebase.firestore().collection('users').doc(uid)
                .get()
                .then((doc) => {
                    const user = doc.data();
                    dispatch(sessionSuccess(user))
                })
        }
    });
}

// export const loginUserWithFacebook = (token) => dispatch => {
//     dispatch(sessionStart());
//     var credential = firebase.auth.FacebookAuthProvider.credential(token)
//     firebase.auth().signInWithCredential(credential)
//         .then(() => {
//   
//         })
//         .catch((error) => {
//             console.error(error.message);
//         });

// }

export const signupUser = (email, password, username, profile) => dispatch => {
    dispatch(sessionStart());
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const user = {
                id: uid,
                email,
                username,
                profile,
                google: false
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(user)
                .then(() => {
                    console.log("Cont creat!")
                    dispatch(sessionSuccess(user))
                })
                .catch((error) => {
                    dispatch(sessionError(error.message));
                });
        })
        .catch((error) => {
            dispatch(sessionError(error.message));
            alert(error)
        });
};

export const logoutUser = () => dispatch => {
    dispatch(sessionStart());
    firebase.auth().signOut()
        .then(() => {
            dispatch(sessionLogout())
        })
        .catch(error => {
            dispatch(sessionError(error.message));
        });
};


const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.user.id) {
                // We don't need to reauth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}

const sessionStart = () => ({
    type: types.SESSION_START
});

const sessionSuccess = user => ({
    type: types.SESSION_SUCCESS,
    user
});

const sessionError = error => ({
    type: types.SESSION_ERROR,
    error
});

const sessionLogout = () => ({
    type: types.SESSION_LOGOUT
});


