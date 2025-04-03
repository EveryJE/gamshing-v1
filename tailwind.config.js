// tailwind.config.js
import forms from '@tailwindcss/forms';
import preline from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './**/*.html',
        './node_modules/preline/dist/*.js',
    ],
    plugins: [
        forms,
        preline,
    ],
};