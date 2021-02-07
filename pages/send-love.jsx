import Nav from '@/components/Nav';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { createCards } from '@/lib/db';
import MessageForm from '@/components/MessageForm';
import Card from '@/components/Card';
import { useRouter } from 'next/router';
import uuid from 'react-uuid';

export default function createLove() {
    const router = useRouter();

    // to track dirty
    const [dirty, setDirty] = useState(false);
    const [form, setForm] = useState({
        to: '',
        from: '',
        msg: '',
        date: new Date(),
        imageKey: 'love',
        dirty: false,
    });

    const handleFormOnChange = (e) => {
        setDirty(true);

        setForm({ ...form, dirty: !dirty, [e.target.name]: e.target.value });
    };

    const handleImageClick = (id) => {
        setForm({ ...form, imageKey: id });
    };

    const handleSubmitMessage = async () => {
        const uid = uuid();
        await createCards(form, uid);
        // setForm({
        //     to: '',
        //     from: '',
        //     msg: '',
        //     date: new Date(),
        //     imageKey: 'love',
        // });
        router.push(`/card/${uid}?sender=true`);
    };

    const title = 'Send Love - love4heroes';

    return (
        <>
            <NextSeo title={title} />
            <Nav />
            <div className='flex flex-col justify-center py-2 md:space-x-10 md:flex-row layout'>
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
