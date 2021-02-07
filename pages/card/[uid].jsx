import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import CardComponent from '@/components/Card';
import Download from '@/components/download';
import Nav from '@/components/Nav';
import CopyToClipboard from '@/components/CopyToClipboard';

export default function Card() {
    const router = useRouter();
    const { data } = useSWR(`/api/card/${router.query.uid}`, fetcher);
    console.log(router);

    if (data) {
        const form = {
            ...data,
            imageKey: data.imageKey ? data.imageKey : 'love',
        };
        return (
            <div>
                <Nav />
                <div className='flex flex-col justify-center h-screen'>
                    <CardComponent form={form} />
                    <div
                        className='flex items-center justify-center'
                        style={{ paddingTop: 10 }}
                    >
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
