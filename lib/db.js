import firebase from './firebase';

const firestore = firebase.firestore();

export function createCards(data, uid) {
    return firestore.collection('cards').doc(uid).set(data);
}
