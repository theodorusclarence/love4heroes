import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '@/data/images';
import Image from 'next/image';

const defaultForm = { to: '', from: '', msg: '', imageKey: 'love' };
export default function Card({ handleImage, form = defaultForm, display }) {
    const { to, from, msg, imageKey } = form;
    // if its on display, show back side first
    const [isFlipped, setIsFlipped] = useState(display ? true : false);

    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div onClick={handleClick} className='cursor-pointer'>
                <figure className='w-full shadow-sm'>
                    <Image
                        width={528}
                        height={572}
                        layout='responsive'
                        className='shadow-sm'
                        src={images[imageKey].front}
                        alt='Card'
                    />
                </figure>
            </div>

            <div onClick={handleClick} className='cursor-pointer' id='back'>
                <figure className='relative w-full shadow-md'>
                    <Image
                        width={528}
                        height={572}
                        layout='responsive'
                        className='relative shadow-sm'
                        src={images[imageKey].back}
                        alt='Card'
                    />
                </figure>

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
