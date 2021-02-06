import { db } from './firebase-admin';

export async function getAllCards() {
    try {
        const snapshot = await db.collection('cards').get();

        let cards = [];

        snapshot.forEach((doc) => {
            cards.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return { cards };
    } catch (error) {
        return { error };
    }
}

export async function getCard(uid) {
    const card = await db.collection('cards').doc(uid).get();

    return card.data();
}
