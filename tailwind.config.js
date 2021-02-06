module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#E88081',
                hover: '#E9ADAD',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
