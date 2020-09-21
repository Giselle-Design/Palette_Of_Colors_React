export default {

    Navbar: {
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    
    
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Satisfy",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "red",
        }
    },
    
    
    sliderContainer: {
        marginTop: "18px",
        marginLeft: "15px",
    },
    
    selectContainer: {
        marginLeft: "auto",
        marginTop: "15px",
        marginRight: "1rem",
    },
    
    slider: {
        width: "340px",
        margin: "0 25px",
        display: "inline-block", 
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        }, 
        "& .rc-slider-rail": {
            height: "8px" 
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: "red",
            outline: "none",
            border: "2px solid red",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px",

        }
    }
};
