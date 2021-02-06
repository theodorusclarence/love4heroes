import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const defaultForm = { to: '', from: '', message: '', imageId: 1 };
export default function Card({ form = defaultForm }) {
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
                    <img src='/images/love-card-front.png' alt='' />
                </div>

                <div
                    className='bg-red-100'
                    onClick={handleClick}
                    style={{
                        backgroundImage: "url('/images/love-card-back.png')",
                    }}
                >
                    <div
                        style={{ width: '480px', height: '520px' }}
                        className='flex flex-col px-16 py-16 space-y-10'
                    >
                        <div>Dear {form.to},</div>
                        <div className='h-3/4'>{form.message}</div>
                        <div>
                            <div>Love,</div>
                            <div>{form.from}</div>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}
