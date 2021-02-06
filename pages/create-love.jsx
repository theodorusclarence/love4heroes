import Nav from '@/components/Nav';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import MessageForm from '@/components/MessageForm';
import Card from '@/components/Card';

export default function createLove() {
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
                    />
                </div>
                <div className='hidden w-full md:block'>
                    <Card form={form} />
                </div>
            </div>
        </>
    );
}
