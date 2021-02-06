import Nav from '@/components/Nav';
import { createCards } from '@/lib/db';
import { NextSeo } from 'next-seo';
import MessageForm from 'components/MessageForm';

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
    return (
        <>
            <NextSeo />
            <Nav />
            <section className='bg-gray-600'>
                <main className='flex flex-col items-center justify-center min-h-screen text-green-400 layout'>
                    <h1>
                        <a
                            className='font-bold hover:text-green-500'
                            href='https://github.com/theodorusclarence/nextjs-tailwind-starter'
                            target='_blank'
                            rel='noreferer noopener'
                        >
                            NextJS Tailwind Starter
                        </a>
                    </h1>
                    <button onClick={onCreateCard}>Create Card</button>

                    <footer className='absolute text-gray-100 bottom-2'>
                        © {new Date().getFullYear()}
                    </footer>
                </main>
            </section>
        </>
    );
}
