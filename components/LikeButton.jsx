import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';
import { useEffect, useState } from 'react';

export default function LikeButton() {
    const { data } = useSWR('/api/like', fetcher);

    // let isLiked = null;

    const [isLiked, setIsLiked] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // isLiked = localStorage?.getItem('liked');
            setIsLiked(localStorage?.getItem('liked'));
        }
    }, []);

    const addLike = async () => {
        localStorage.setItem('liked', 'true');
        setIsLiked(true);
        mutate(
            '/api/like',
            { count: { counter: data.count.counter + 1 } },
            false
        );
        await fetch('/api/like', {
            method: 'POST',
        });
    };

    if (isLiked) {
        return (
            <button
                className={`transition-colors 
                bg-primary text-white cursor-default
             flex flex-col items-center  justify-center p-4 space-y-2 text-sm font-medium rounded-md focus:outline-none`}
            >
                <p className='font-bold'>Thanks for your like!</p>
                <img src={`/images/logo/heart-white.svg`} />
                <p>{data?.count.counter || '––'}</p>
            </button>
        );
    }

    return (
        <button
            className={`transition-colors 
                text-black bg-white border border-black flex flex-col items-center  justify-center p-4 space-y-2 text-sm font-medium rounded-md focus:outline-none`}
            onClick={addLike}
        >
            <p className='font-bold'>Like for Frontline Workers</p>
            <img src={`/images/logo/heart-pink.svg`} />
            <p>{data?.count.counter || '––'}</p>
        </button>
    );
}
