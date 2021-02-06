import Nav from '@/components/Nav';
import { createCards } from '@/lib/db';
import { NextSeo } from 'next-seo';
import MessageForm from 'components/MessageForm';
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
    return (
        <>
            <NextSeo />
            <Nav />
            <section className=''>
                <main className='flex flex-col items-center justify-center min-h-screen layout'>
                    <Button btn onClick={console.log('hi')}>
                        hello
                    </Button>
                </main>
            </section>
        </>
    );
}
