import Button from "@mui/material/Button";

// <Button
//   variant="contained"
//   sx={{
//     backgroundColor: "#0082fd",
//     marginTop: "15px",
//     fontWeight: "bold",
//     padding: props.padding,
//     fontSize: "16px",
//     borderRadius : "10px"
//   }}
// >
//   {props.children}
// </Button>

const BlueButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: "#0082fd",
        color: "white",
        borderRadius: "10px",
        width: props.width,
        border: "none",
        height: "48px",
        marginTop: "30px",
        fontWeight : "bold" ,
        cursor : "pointer"
      }}
    >
      {props.children}
    </button>
  );
};

export default BlueButton;
