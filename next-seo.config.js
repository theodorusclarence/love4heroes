const title = 'love4heroes';
const description =
    'An app to send thank you cards to frontline workers. The mission of this app is to let people share gratitude for frontline workers.';

const SEO = {
    title,
    description,
    canonical: 'https://love4heroes.online',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://love4heroes.online',
        title,
        description,
        images: [
            {
                url: 'https://love4heroes.online/favicon/large-og.png',
                alt: title,
                width: 1200,
                height: 1200,
            },
        ],
    },
};

export default SEO;

// EXAMPLES
{
    /* 
    const title = 'Next.js Tailwind Starter';
    const description = 'your description';
    const url = 'https://theodorusclarence.com';

    <NextSeo
    title={title}
    description={description}
    canonical={url}
    openGraph={{
        url,
        title,
        description,
    }}
/>;  */
}
