import Nav from '@/components/Nav';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import MessageForm from '@/components/MessageForm';
import Card from '@/components/Card';

export default function createLove() {
    const [form, setForm] = useState({
        to: '',
        from: '',
        message: '',
        imageId: 1,
    });
    const handleFormOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageClick = (id) => {
        setForm({ ...form, imageId: id });
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
                        handleImageClick={handleImageClick}
                    />
                </div>
                <div className='hidden md:block'>
                    <Card form={form} />
                </div>
            </div>
        </>
    );
}
