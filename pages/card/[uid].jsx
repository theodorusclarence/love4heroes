import useSWR from 'swr';
import { useRouter } from 'next/router';
import fetcher from '@/utils/fetcher';
import CardPreview from '@/components/CardPreview';
import Download from '@/components/download';
import Nav from '@/components/Nav';
import CopyToClipboard from '@/components/CopyToClipboard';
import Button from '@/components/Button';
import { NextSeo } from 'next-seo';

export default function CardPreviewPage() {
    const router = useRouter();
    console.log(router);
    const { data } = useSWR(`/api/card/${router.query.uid}`, fetcher);

    if (data) {
        const form = {
            ...data,
            imageKey: data.imageKey ? data.imageKey : 'love',
        };

        if (!data.imageKey) {
            const title = `Message Not Found - love4heroes`;
            return (
                <>
                    <NextSeo title={title} />
                    <Nav />
                    <div
                        style={{ minHeight: 'calc(100vh - 56px)' }}
                        className='flex flex-col items-center justify-center space-y-4 layout'
                    >
                        <h3 className='text-center '>Message Not Found ;(</h3>
                        <p>Try checking if you got the right link</p>
                        <Button href='/'>Go To Home</Button>
                    </div>
                </>
            );
        }

        const title = `Message From ${data?.from} - love4heroes`;
        return (
            <>
                <NextSeo title={title} />
                <Nav />
                <div
                    style={{ maxWidth: 490, minHeight: 'calc(100vh - 56px)' }}
                    className='flex flex-col justify-center py-4 layout'
                >
                    {router.query.sender ? (
                        <h3 className='mb-4 text-center'>
                            Thanks for your warm message!
                        </h3>
                    ) : (
                        <h3 className='mb-4 text-center'>
                            Somebody Sent You A Message!
                        </h3>
                    )}
                    <CardPreview form={form} />
                    <div className='flex items-center justify-center mt-4'>
                        <div style={{ marginRight: 20 }}>
                            <Download />
                        </div>
                        <CopyToClipboard
                            textToCopy={`${
                                window.location.origin +
                                window.location.pathname
                            }`}
                        />
                    </div>
                    {router.query.sender && (
                        <p className='mt-2 text-center'>
                            You can also directly send this card using these
                            buttons
                        </p>
                    )}
                </div>
            </>
        );
    } else {
        return 'Loading...';
    }
}
