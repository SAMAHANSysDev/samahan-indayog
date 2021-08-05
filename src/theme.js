import { createTheme } from "@material-ui/core";

export default createTheme({
    palette: {
        background: '#f2f4f8',
        secondary: {
            main: '#ffffff'
        }
    },
    typography: {
        // inimport ko sila using your index.css
        fontFamily: ["Boldstrom", "Monteserrat", "America"].join(","),

        // change mo lang dito gusto mong settings ng each type of typography
        // then mag automatically change na sya for all of the Typography components sa
        // code mo.
        h1: {
            fontFamily: "Boldstrom",
            fontSize: 'clamp(1.5rem, -1.3125rem + 9vw, 3.75rem)'
        },
        h2: {
            fontFamily: "Boldstrom",
            fontSize: 'clamp(1.25rem, -1.0938rem + 7.5vw, 3.125rem)'
        },
        h3: {
            fontFamily: "Boldstrom",
            fontSize: 'clamp(0.938rem, -0.702rem + 5.248vw, 2.25rem)',
        },
        h4: {
            fontFamily: "Montserrat",
            fontWeight: 800,
            fontSize: 'clamp(0.75rem, -0.1875rem + 3vw, 1.5rem)',
        },
        h5: {
            fontFamily: "Montserrat",
            fontWeight: 900,
            fontSize: 'clamp(0.625rem, -0.1563rem + 2.5vw, 1.25rem)',
        },
        h6: {
            fontFamily: "Montserrat",
            fontSize: 'clamp(0.5rem, -0.0475rem + 1.752vw, 0.938rem)'
        },
        body1: {
            fontFamily: "Montserrat",
            fontSize: 'clamp(0.375rem, -0.0938rem + 1.5vw, 0.75rem)',
        },
    },
});
