import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';

export default function LikeButton() {
    const { data } = useSWR('/api/like', fetcher);

    let isLiked = null;
    if (typeof window !== 'undefined') {
        isLiked = localStorage?.getItem('liked');
    }

    const addLike = async () => {
        if (isLiked) {
            return;
        }
        localStorage.setItem('liked', 'true');
        mutate(
            '/api/like',
            { count: { counter: data.count.counter + 1 } },
            false
        );
        await fetch('/api/like', {
            method: 'POST',
        });
    };

    return (
        <button
            className={`transition-colors ${
                isLiked
                    ? 'bg-primary text-white cursor-default'
                    : 'text-black bg-white border border-black '
            } flex flex-col items-center justify-center p-4 space-y-2 text-sm font-medium rounded-md focus:outline-none`}
            onClick={addLike}
        >
            <p className='font-bold'>
                {isLiked ? 'Thanks for your like!' : 'Like for Frontliners'}
            </p>
            <img src={`/images/logo/heart-${isLiked ? 'white' : 'pink'}.svg`} />
            <p>{data?.count.counter || '––'}</p>
        </button>
    );
}
