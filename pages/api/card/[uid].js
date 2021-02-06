import { getCard } from '@/lib/db-admin';

export default async (req, res) => {
    const uid = req.query.uid;

    try {
        const card = await getCard(uid);

        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error });
    }
};
