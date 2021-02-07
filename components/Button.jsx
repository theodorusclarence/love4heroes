import Link from 'next/link';

export default function Button({ href, children, btn, onClick }) {
    if (btn) {
        return (
            <button
                onClick={onClick}
                className='flex items-center px-2 py-2 space-x-1 text-xs font-bold text-white rounded-md md:text-base lg:px-6 bg-primary hover:bg-hover'
            >
                {children}
            </button>
        );
    }
    return (
        <Link href={href}>
            <a className='flex items-center px-2 py-2 space-x-1 text-xs font-bold text-white rounded-md md:text-base lg:px-6 bg-primary hover:bg-hover'>
                {children}
            </a>
        </Link>
    );
}
