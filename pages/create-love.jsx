import Nav from '@/components/Nav';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import MessageForm from '@/components/MessageForm';
import Card from '@/components/Card';

export default function createLove() {
    const [form, setForm] = useState({ to: '', from: '', message: '' });
    const handleFormOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <NextSeo />
            <Nav />
            <div className='flex justify-center space-x-10'>
                <div>
                    <MessageForm
                        form={form}
                        handleFormOnChange={handleFormOnChange}
                    />
                </div>
                <div className='hidden md:block'>
                    <Card />
                </div>
            </div>
        </>
    );
}
