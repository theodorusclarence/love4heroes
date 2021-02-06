import React, { useEffect, useState } from 'react';

const MessageForm = () => {
    const [name, handleName] = useState('');
    const [email, handleEmail] = useState('');
    const [messageBody, handleMessageBody] = useState('');

    return (
        <div className='mt-6'>
            <div className='items-center -mx-2 md:flex'>
                <div className='w-full mx-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                        Name
                    </label>

                    <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        type='text'
                        onChange={(event) => handleName(event.target.value)}
                    />
                </div>

                <div className='w-full mx-2 mt-4 md:mt-0'>
                    <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                        {' '}
                        Recipient E-mail
                    </label>

                    <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        type='email'
                        onChange={(event) => handleEmail(event.target.value)}
                    />
                </div>
            </div>

            <div className='w-full mt-4 '>
                <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                    Post
                </label>

                <textarea
                    className='block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                    onChange={(event) => handleMessageBody(event.target.value)}
                ></textarea>
            </div>

            <div className='flex justify-center mt-6'>
                <button className='px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                    Submit Message
                </button>
            </div>
        </div>
    );
};

export default MessageForm;
