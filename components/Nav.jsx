import Link from 'next/link';
import Image from 'next/image';
import SendLoveButton from './SendLoveButton';

export default function Nav() {
    return (
        <nav className='sticky top-0 z-10 bg-white'>
            <div className='flex items-center justify-between py-2 text-black layout'>
                <Link href='/'>
                    <a className='flex items-center w-16 font-bold'>
                        <Image
                            width={200}
                            height={112}
                            src='/images/love4heroes-logo.png'
                            alt='Logo'
                        />
                    </a>
                </Link>
                <ul className='flex items-center justify-between space-x-2 md:space-x-8'>
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
