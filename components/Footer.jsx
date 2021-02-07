export default function Footer() {
    return (
        <section className='py-8 bg-white'>
            <footer className='flex flex-col items-center justify-center layout'>
                <p>
                    This application was created for{' '}
                    <a
                        rel='noopener noreferer'
                        target='_blank'
                        className='text-primary hover:text-hover'
                        href='https://2021.uottahack.ca/'
                    >
                        uOttaHack 4
                    </a>
                </p>
                <p className='text-sm '>
                    ©{' '}
                    <a
                        className='text-primary hover:text-hover'
                        rel='noopener noreferer'
                        target='_blank'
                        href='https://www.linkedin.com/in/theodorus-clarence'
                    >
                        Clarence
                    </a>{' '}
                    •{' '}
                    <a
                        className='text-primary hover:text-hover'
                        rel='noopener noreferer'
                        target='_blank'
                        href='https://www.linkedin.com/in/teofilusraynaldo'
                    >
                        Ray
                    </a>{' '}
                    •{' '}
                    <a
                        className='text-primary hover:text-hover'
                        rel='noopener noreferer'
                        target='_blank'
                        href='https://www.linkedin.com/in/alyssa-easterly-0a294b1ab'
                    >
                        Alyssa
                    </a>{' '}
                    •{' '}
                    <a
                        className='text-primary hover:text-hover'
                        rel='noopener noreferer'
                        target='_blank'
                        href='https://www.linkedin.com/in/jacobkagon'
                    >
                        Jacob
                    </a>
                </p>
            </footer>
        </section>
    );
}
