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
                    className='w-full shadow-md'
                    src={images[imageKey].front}
                    alt='Card'
                />
            </div>

            <div onClick={handleClick} className='cursor-pointer' id='back'>
                <img
                    className='relative w-full shadow-md'
                    src={images[imageKey].back}
                    alt='Card'
                />

                <div className='absolute inset-0 flex flex-col px-16 py-16 space-y-10 textfield'>
                    <div className='font-bold max-w-11/12'>Dear {to},</div>
                    <div className='whitespace-pre-wrap h-3/4 font-primary text max-w-11/12'>
                        {msg}
                    </div>
                    <div className='font-bold max-w-11/12'>
                        <div>Love,</div>
                        <div>{from}</div>
                    </div>
                    <style jsx>{`
                        .textfield {
                            font-size: min(2.4vw, 1rem);
                        }
                    `}</style>
                </div>
            </div>
        </ReactCardFlip>
    );
}
