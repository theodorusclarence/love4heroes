import Nav from '@/components/Nav';
import { NextSeo } from 'next-seo';
import MessageForm from '@/components/MessageForm';
import Card from '@/components/Card';

export default function createLove() {
    return (
        <>
            <NextSeo />
            <Nav />
            <div className='flex justify-center space-x-10'>
                <MessageForm />
                <Card />
            </div>
        </>
    );
}
