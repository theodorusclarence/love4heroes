import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Nav from '@/components/Nav';
import CardGrid from '@/components/CardGrid';
import Button from '@/components/Button';
import SendLoveButton from '@/components/SendLoveButton';
import LikeButton from '@/components/LikeButton';

export default function Home() {
    return (
        <>
            <NextSeo />

            <Nav />
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
                            <figure className='relative w-full'>
                                <Image
                                    width={604}
                                    height={402}
                                    layout='responsive'
                                    src='/images/logo/heroespic.jpg'
                                    alt='Illustration'
                                />
                                <figcaption className='absolute transform -translate-x-1/2 bottom-2 md:bottom-4 left-1/2'>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferer'
                                        className='text-xs text-gray-400 underline'
                                        href='http://www.freepik.com'
                                    >
                                        Designed by Freepik
                                    </a>
                                </figcaption>
                            </figure>
                            <LikeButton />
                        </div>
                    </div>
                </div>
            </header>

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
