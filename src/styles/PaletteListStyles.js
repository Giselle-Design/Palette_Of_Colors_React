export default {

    root: {
        // backgroundColor: "#ff1ab3",
        background: "linear-gradient(to right, #eaafc8, #654ea3)",
        height: "100vh",
        display:  "flex",
        alignItem: "flex-start",
        justifyContent: "center",
        
    },

    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "25px"
    },

    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Satisfy",
        color: "white",
        "& a": {
            color: "white"
        }
    },

    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    },

    linkColor: {
        textDecoration: "none",
    }

};