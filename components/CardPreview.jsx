import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '@/data/images';
import Image from 'next/image';

const defaultForm = { to: '', from: '', msg: '', imageKey: 'love' };
export default function Card({ handleImage, form = defaultForm }) {
    const { to, from, msg, imageKey } = form;
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div onClick={handleClick} className='cursor-pointer'>
                    <img
                        className='w-full'
                        src={images[imageKey].front}
                        alt='Card'
                    />
            </div>

            <div onClick={handleClick} className='cursor-pointer' id='back'>
                <img
                    className='relative w-full'
                    src={images[imageKey].back}
                    alt='Card'
                />

                <div className='absolute inset-0 flex flex-col px-16 py-16 space-y-10'>
                    <div>Dear {to},</div>
                    <div className='whitespace-pre-wrap h-3/4 font-primary text'>
                        {msg}
                    </div>
                    <div>
                        <div>Love,</div>
                        <div>{from}</div>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    );
}
