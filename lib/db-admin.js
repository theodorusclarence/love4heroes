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

export async function getLikes() {
    const card = await db.collection('likes').doc('ufeZ9T4Hx6tA7vXmcqNP').get();

    return card.data();
}

export async function addLike(count) {
    await db.collection('likes').doc('ufeZ9T4Hx6tA7vXmcqNP').set({ count });
}
