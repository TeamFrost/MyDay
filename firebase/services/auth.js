import * as Google from 'expo-google-app-auth';
import { firebase } from '../config';

const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
                // We don't need to reauth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}


export const onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
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
                });
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}

export const signInWithGoogleAsync = async () => {
    try {
        const result = await Google.logInAsync({
            // androidClientId: "YOUR_CLIENT_ID_HERE",
            iosClientId: '26219097559-2gq1ocfsom0tijd104od359ijsoj29t6.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            onSignIn(result);
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        return { error: true };
    }
}


export const getCurrentlySingedIn = async () => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            usersRef
                .doc(user.uid)
                .get()
                .then((document) => {
                    const userData = document.data()
                    return userData;
                })
                .catch((error) => {
                    return error;
                });
        } else {
            return null;
        }
    });
}


export const emailAndPassSignIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
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
                    return user;
                })
                .catch(error => {
                    return error;
                });
        })
        .catch(error => {
            return error;
        })
}


export const createUser = (email, password, username, profile) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const user = {
                id: uid,
                email,
                username,
                profile
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(user)
                .then(() => {
                    console.log("Cont creat!")
                    return user;
                })
                .catch((error) => {
                    return error;
                });
        })
        .catch((error) => {
            return error;
        });
}

export const signOut = () => {
    firebase.auth().signOut()
        .then(() => {
            return null;
        })
        .catch(error => {
            return error;
        });
}