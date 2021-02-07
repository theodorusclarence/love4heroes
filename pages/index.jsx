import Nav from '@/components/Nav';
import { createCards } from '@/lib/db';
import { NextSeo } from 'next-seo';
import CardGrid from './CardGrid';
import { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import SendLoveButton from '@/components/SendLoveButton';
import LikeButton from '@/components/LikeButton';

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
            {/* <main className='flex flex-col items-center justify-center min-h-screen text-green-400'> */}
            <header className='bg-white dark:bg-gray-800'>
                <div className='flex justify-center min-h-screen py-14 layout'>
                    <div className='items-center w-full md:flex'>
                        <div className='w-full md:w-1/2'>
                            <figure className='mx-auto w-36 md:mx-0 md:w-48'>
                                <Image
                                    width={200}
                                    height={112}
                                    src='/images/love4heroes-logo.png'
                                    alt='Logo'
                                />
                            </figure>
                            <p className='mb-2'>
                                Express our gratitude by supporting frontliners
                                with warm messages
                            </p>
                            <div className='flex flex-col items-start space-y-2 md:space-x-4 md:space-y-0 md:flex-row'>
                                <Button href='#messages'>
                                    See the Messages
                                </Button>
                                <SendLoveButton />
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center w-full mt-6 md:mt-0 md:w-1/2'>
                            <figure className='w-full'>
                                <Image
                                    width={604}
                                    height={402}
                                    layout='responsive'
                                    src='/images/logo/heroespic.jpg'
                                    alt='Illustration'
                                />
                            </figure>
                            <LikeButton />
                        </div>
                    </div>
                </div>
            </header>
            {/* </main> */}
            <section id='messages' className='py-20 bg-offwhite'>
                <div className='layout'>
                    <h2 className='mb-2'>Warm Messages</h2>
                    <p className='mb-4'>
                        These open messages was sent by people worldwide to all
                        of the frontliners.
                    </p>
                    <CardGrid />
                </div>
            </section>
        </>
    );
}
