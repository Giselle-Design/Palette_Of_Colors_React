import sizes from "./sizes";
export default {

    root: {
        // backgroundColor: "#ff1ab3",
        background: "linear-gradient(to right, #eaafc8, #654ea3)",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "scroll"
        
    },

    heading: {
        fontSize: "2rem"
      },


    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "20px", 
        [sizes.down("xl")]: {
            width: "80%"
          },
          [sizes.down("xs")]: {
            width: "75%"
          }
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
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
          },
          [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem"
          }
    },

    linkColor: {
        textDecoration: "none",
    },

    create: {
      marginRight: "12px"
    }

};