/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        fontFamily: {},
        extend: {},
    },
    plugins: [
        require("flowbite/plugin"),
        require("tw-elements/dist/plugin.cjs"),
    ],
    theme: {
        colors: {
            navbar: "#ffffff",
            text: "#484848",
        },
    },
};
