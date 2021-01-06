module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'temp-primary': 'var(--color-primary)',
                'temp-secondary': 'var(--color-secondary)',
                'temp-green': {
                    DEFAULT: 'var(--color-green-default)',
                    light: 'var(--color-light-green)',
                    100: 'var(--color-light-green-100)',
                    200: 'var(--color-light-green-200)',
                },
                'temp-white': 'var(--color-white)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
