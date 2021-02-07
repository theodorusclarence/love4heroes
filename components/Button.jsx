import Link from 'next/link';

export default function Button({
    href,
    children,
    btn,
    type = 'button',
    onClick,
}) {
    if (btn) {
        return (
            <button
                onClick={onClick}
                className='flex items-center px-6 py-2 space-x-1 font-bold text-white rounded-md bg-primary hover:bg-hover'
                type={type}
            >
                {children}
            </button>
        );
    }
    return (
        <Link href={href}>
            <a className='flex items-center px-6 py-2 space-x-1 font-bold text-white rounded-md bg-primary hover:bg-hover'>
                {children}
            </a>
        </Link>
    );
}
