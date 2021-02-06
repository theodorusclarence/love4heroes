import Nav from '@/components/Nav';
import { NextSeo } from 'next-seo';
import MessageForm from '@/components/MessageForm';

export default function createLove() {
    return (
        <>
            <NextSeo />
            <Nav />
            <MessageForm />
        </>
    );
}
