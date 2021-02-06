import React, { useEffect, useState } from 'react';

const MessageForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [imageId, setImageId] = useState(1);

    const handleImageClick = (id) => {
        setImageId(id);
    };

    return (
        <div className='flex justify-center'>
            <div className='w-11/12 max-w-2xl py-5 space-y-5'>
                <div>
                    <h2>Send your love</h2>
                </div>
                <div className='w-full'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                        htmlFor='to'
                    >
                        To
                    </label>

                    <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        name='to'
                        type='text'
                        onChange={(event) => setTo(event.target.value)}
                    />
                </div>

                <div className='w-full'>
                    <label
                        htmlFor='from'
                        className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                    >
                        From
                    </label>

                    <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        name='from'
                        type='text'
                        onChange={(event) => setFrom(event.target.value)}
                    />
                </div>

                <div className='w-full'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                        htmlFor='message'
                    >
                        Message
                    </label>

                    <textarea
                        htmlFor='message'
                        rows='3'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                </div>

                <div className='flex space-x-5'>
                    <div
                        className={
                            (imageId === 1 ? 'selected' : '') + ' ' + 'h-full'
                        }
                        onClick={() => handleImageClick(1)}
                    >
                        <img
                            src='/images/love-card-front.png'
                            className='h-10/12'
                        ></img>
                    </div>
                    <div
                        className={imageId === 2 ? 'selected' : ''}
                        onClick={() => handleImageClick(2)}
                    >
                        <img src='/images/grateful-card-front.png'></img>
                    </div>
                    <div
                        className={imageId === 3 ? 'selected' : ''}
                        onClick={() => handleImageClick(3)}
                    >
                        <img src='/images/meow-card-front.png'></img>
                    </div>
                    <style jsx>{`
                        .selected {
                            border: green solid 1px;
                            box-shadow: 0px 12px 22px 1px #333;
                        }
                    `}</style>
                </div>

                <div className='flex justify-center'>
                    <button className='px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                        Submit Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
