import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import CardComponent from '@/components/Card';
import Download from '@/pages/download';
import Nav from '@/components/Nav';

export default function Card() {
    const router = useRouter();
    const { data } = useSWR(`/api/card/${router.query.uid}`, fetcher);
    console.log(data);

    if (data) {
        const form = {
            ...data,
            imageKey: data.imageKey ? data.imageKey : 'love',
        };
        return (
            <div>
                <Nav />

                <CardComponent form={form} />

                <Download />
            </div>
        );
    } else {
        //loading
        return null;
    }
    return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
