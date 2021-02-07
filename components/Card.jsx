import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '@/data/images';
import Image from 'next/image';

const defaultForm = {
    to: '',
    from: '',
    msg: '',
    imageKey: 'love',
    dirty: 'false',
};
export default function Card({ handleImage, form = defaultForm, display }) {
    const { to, from, msg, imageKey } = form;
    // if its on display, show back side first
    const [isFlipped, setIsFlipped] = useState(display ? true : false);

    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };

    useEffect(() => {
        const handleFirst = () => {
            setIsFlipped(true);
        };

        if (form.dirty) handleFirst();
    }, [form.dirty]);

    return (
        <div className='scale'>
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
                    <div className='absolute inset-0 flex flex-col px-16 py-16 space-y-10 textfield'>
                        <div className='font-bold max-w-11/12'>Dear {to},</div>
                        <div className='whitespace-pre-wrap h-3/4 font-primary text max-w-11/12'>
                            {msg}
                        </div>
                        <div className='font-bold max-w-11/12'>
                            <div>Love,</div>
                            <div>{from}</div>
                            <p className='mt-2 italic font-normal text-gray-700'>
                                love4heroes.online
                            </p>
                        </div>
                        <style jsx>{`
                            .textfield {
                                font-size: min(2vw, 1rem);
                            }
                            @media (min-width: 769px) {
                                .textfield {
                                    font-size: min(1vw, 1rem);
                                    ${display && 'font-size: min(1vw, .6rem);'}
                                }
                            }
                        `}</style>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}
