import { getAllCards } from '@/lib/db-admin';

export default async (_, res) => {
    try {
        const cards = await getAllCards();

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error });
    }
};
