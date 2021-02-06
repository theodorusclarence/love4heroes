import Link from 'next/link';
import SendLoveButton from './SendLoveButton';

export default function Nav() {
    return (
        <nav className='sticky top-0 bg-white'>
            <div className='flex items-center justify-between py-2 text-black layout'>
                <Link href='/'>
                    <a className='font-bold'>
                        <img
                            className='w-16'
                            src='/images/love4heroes-logo.png'
                            alt='Heart'
                        />
                    </a>
                </Link>
                <ul className='flex items-center justify-between space-x-8'>
                    <li>
                        <Link href='#messages'>
                            <a className='hover:text-gray-700'>Messages</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/create-love'>
                            <SendLoveButton />
                        </Link>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                nav {
                    box-shadow: 0px 2px 6px rgba(232, 128, 129, 0.15);
                }
            `}</style>
        </nav>
    );
}
