import { addLike, getLikes } from '@/lib/db-admin';

export default async (req, res) => {
    let likes = 0;
    try {
        likes = await getLikes();
    } catch (error) {
        res.status(500).json({ error });
    }

    if (req.method === 'GET') {
        res.status(200).json(likes);
    }

    if (req.method === 'POST') {
        await addLike({ counter: likes.count.counter + 1 });
        res.status(200).json({ msg: 'success' });
    }
};
