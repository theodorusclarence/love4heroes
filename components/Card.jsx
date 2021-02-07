import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '@/data/images';
import Image from 'next/image';
import { createCards } from '@/lib/db';

const defaultForm = { to: '', from: '', msg: '', imageKey: 'love' };
export default function Card({ form = defaultForm }) {
    const { to, from, msg, imageKey } = form;
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <div className='flex items-center justify-center h-full cursor-pointer'>
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection='horizontal'
                className='border-2 border-green-600'
            >
                <div onClick={handleClick}>
                    <Image
                        width={480}
                        height={520}
                        src={images[imageKey].front}
                        alt='Card'
                    />
                </div>

                <div className='bg-red-100' onClick={handleClick}>
                    <Image
                        width={480}
                        height={520}
                        src={images[imageKey].back}
                        alt='Card'
                        className='relative'
                    />

                    <div className='absolute inset-0 flex flex-col px-16 py-16 space-y-10'>
                        <div>Dear {to},</div>
                        <pre className='whitespace-pre-wrap h-3/4 font-primary text'>
                            {msg}
                        </pre>
                        <div>
                            <div>Love,</div>
                            <div>{from}</div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}
