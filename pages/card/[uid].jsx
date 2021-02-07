import useSWR from 'swr';
import { useRouter } from 'next/router';
import fetcher from '@/utils/fetcher';
import CardPreview from '@/components/CardPreview';
import Download from '@/components/download';
import Nav from '@/components/Nav';
import CopyToClipboard from '@/components/CopyToClipboard';

export default function CardPreviewPage() {
    const router = useRouter();
    const { data } = useSWR(`/api/card/${router.query.uid}`, fetcher);

    if (data) {
        const form = {
            ...data,
            imageKey: data.imageKey ? data.imageKey : 'love',
        };
        return (
            <div>
                <Nav />
                <div
                    style={{ maxWidth: 528, minHeight: 'calc(100vh - 56px)' }}
                    className='flex flex-col justify-center layout'
                >
                    <h3 className='mb-4 text-center'>
                        Somebody Sent You A Message!
                    </h3>
                    <CardPreview form={form} />
                    <div className='flex items-center justify-center mt-4'>
                        <div style={{ marginRight: 20 }}>
                            <Download />
                        </div>
                        <CopyToClipboard
                            textToCopy={`${window.location.href}`}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        //loading
        return null;
    }
    return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
