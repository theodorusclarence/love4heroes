import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Link from 'next/link';

export default function sidewalk() {
    const { data } = useSWR('/api/cards', fetcher);
    // const cards = data?.cards.map((card) => {
    //     return {
    //         date: card.date.toDate(),
    //         ...card,
    //     };
    // });
    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'loading'}
            <pre>
                {JSON.stringify(
                    new Date(data?.cards[1].date._seconds * 1000).toString(),
                    null,
                    2
                )}
            </pre>
            {data?.cards.map((card) => (
                <div key={card.id}>
                    <h3>{card.from}</h3>
                    <p>{card.msg}</p>
                    <p>{new Date(card.date._seconds * 1000).toString()}</p>
                    <p>{card.to}</p>
                    <Link href={`/card/${card.id}`}>
                        <a>go to preview</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}
