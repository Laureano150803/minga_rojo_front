/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
    ],
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
}


