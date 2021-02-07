import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '@/data/images';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Card from '@/components/Card';

const CardGrid = () => {
    const { data } = useSWR('/api/cards', fetcher);
    const [isFlipped, setIsFlipped] = useState(false);
    const [number, handleNumber] = useState([1, 2, 3, 4, 5, 6]);
    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <div className='grid gap-10 md:grid-cols-3'>
            {data?.cards.map((card) => {
                const form = {
                    ...card,
                    imageKey: card.imageKey ? card.imageKey : 'love',
                };
                return <Card display form={form} key={card.id} />;
            })}
        </div>
    );
};

{
    /* <div className='flex flex-col justify-center h-full flex-center'>
                    <div style={{ width: '300px', height: '300px' }}>
                        <ReactCardFlip
                            isFlipped={isFlipped}
                            flipDirection='horizontal'
                            className='border-2 border-green-600'
                        >
                            <div onClick={handleClick}>
                                <img src='/images/card/love-front.png' alt='' />
                            </div>
                            <div
                                className='bg-red-100'
                                onClick={handleClick}
                                style={{
                                    backgroundImage: `/images/card/love-back.png`,
                                }}
                            >
                                <div
                                    style={{ width: '300px', height: '300px' }}
                                    className='flex flex-col px-16 py-16 space-y-10'
                                >
                                    <div>Dear {card.to},</div>
                                    <pre className='h-3/4 font-primary'>
                                        {card.msg}
                                    </pre>
                                    <div>
                                        <div>Love,</div>
                                        <div>{card.from}</div>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div> */
}

export default CardGrid;
