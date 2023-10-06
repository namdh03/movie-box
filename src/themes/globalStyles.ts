const globalStyles = {
    html: {
        fontSize: "62.5%",
    },

    body: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.6rem",
        overflowY: "auto",
        scrollbarGutter: "stable",

        "&::-webkit-scrollbar": {
            borderRadius: 0,
            height: "8px",
            width: "8px",
        },

        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
        },

        "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
            borderRadius: 0,
        },
    },

    a: {
        textDecoration: "none",
    },
};

export default globalStyles;
