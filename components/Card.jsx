import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '@/data/images';

const defaultForm = { to: '', from: '', message: '', imageKey: 'love' };
export default function Card({ form = defaultForm }) {
    const { to, from, message, imageKey } = form;
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection='horizontal'
                className='border-2 border-green-600'
            >
                <div onClick={handleClick}>
                    <img src={images[imageKey].front} alt='' />
                </div>

                <div
                    className='bg-red-100'
                    onClick={handleClick}
                    style={{
                        backgroundImage: `url(${images[imageKey].back})`,
                    }}
                >
                    <div
                        // style={{ width: '480px', height: '520px' }}
                        className='flex flex-col px-16 py-16 space-y-10'
                    >
                        <div>Dear {to},</div>
                        <pre className='h-3/4 font-primary'>{message}</pre>
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
