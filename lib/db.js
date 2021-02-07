import firebase from './firebase';

const firestore = firebase.firestore();

export function createCards(data) {
    return firestore.collection('cards').doc(uid).set(data);
}
