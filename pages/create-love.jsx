import Nav from '@/components/Nav';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { createCards } from '@/lib/db';
import MessageForm from '@/components/MessageForm';
import Card from '@/components/Card';
import { useRouter } from 'next/router';

export default function createLove() {
    const router = useRouter();
    const [form, setForm] = useState({
        to: '',
        from: '',
        msg: '',
        date: new Date(),
        imageKey: 'love',
    });

    const handleFormOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageClick = (id) => {
        setForm({ ...form, imageKey: id });
    };

    const handleSubmitMessage = () => {
        createCards(form);
        // router.push();
    };

    return (
        <>
            <NextSeo />
            <Nav />
            <div className='flex justify-center space-x-10 layout'>
                <div className='w-full'>
                    <MessageForm
                        form={form}
                        handleFormOnChange={handleFormOnChange}
                        handleImageClick={handleImageClick}
                        handleSubmitMessage={handleSubmitMessage}
                    />
                </div>
                <div className='flex flex-col justify-center w-full space-y-3'>
                    <div className='w-full'>
                        <h3>Live Preview: </h3>
                        <p>Try clicking the card!</p>
                    </div>
                    <Card form={form} />
                </div>
            </div>
        </>
    );
}
