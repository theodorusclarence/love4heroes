import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function Card() {
    const router = useRouter();
    const { data } = useSWR(`/api/card/${router.query.uid}`, fetcher);
    return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
