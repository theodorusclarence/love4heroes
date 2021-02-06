import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import '@/styles/globals.css';
import '@/styles/form.css';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
