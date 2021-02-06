import Nav from '@/components/Nav';
import { createCards } from '@/lib/db';
import { NextSeo } from 'next-seo';
import MessageForm from 'components/MessageForm';
import CardGrid from './CardGrid';
import react, { useState } from 'react';
import Button from '@/components/Button';

const onCreateCard = () => {
    const data = {
        from: 'Theo',
        msg: 'Helooo',
        to: 'Frontliners',
        date: new Date(),
    };
    createCards(data);
};

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NextSeo />

            <Nav />
            <main className='flex flex-col items-center justify-center min-h-screen text-green-400'>
                <header className='bg-white dark:bg-gray-800'>
                    <div className='container px-6 py-16 mx-auto layout'>
                        <div className='items-center md:flex'>
                            <div className='w-full md:w-1/2'>
                                <div className='max-w-lg'>
                                    <img
                                        className='w-full h-full max-w-2xl'
                                        src='/images/logo/love4hero-logo.png'
                                        alt=''
                                    />
                                    <h3 className='mt-2 text-gray-600 dark:text-gray-400'>
                                        Express our gratitude by supporting
                                        frontliners with warm messages
                                    </h3>
                                    <div className='flex space-x-4'>
                                        <Button
                                            btn
                                            className='px-5 py-4 mx-4 mt-4 text-sm font-medium text-white uppercase bg-red-300 rounded hover:bg-blue-200 focus:outline-none focus:bg-indigo-500'
                                        >
                                            See the Messages
                                        </Button>
                                        <Button
                                            btn
                                            className='px-5 py-4 mx-4 mt-4 text-sm font-medium text-white uppercase bg-red-300 rounded hover:bg-blue-200 focus:outline-none focus:bg-indigo-500'
                                        >
                                            Send love
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full mt-6 md:mt-0 md:w-1/2'>
                                <img
                                    className='w-full h-full max-w-2xl'
                                    src='/images/logo/heroespic.jpg'
                                    alt=''
                                />
                                <button
                                    className='flex flex-col items-center justify-center p-4 mt-6 text-sm font-medium text-black border border-black rounded-md focus:outline-none'
                                    onClick={() => setCount(count + 1)}
                                >
                                    Like for Frontliners
                                    <img src='/images/logo/heart-pink.svg' />
                                    {count}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </main>
            <CardGrid />
        </>
    );
}
