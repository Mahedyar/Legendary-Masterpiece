import Button from "@mui/material/Button";

const BlueButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#0082fd",
        marginTop: "15px",
        fontWeight: "bold",
        padding: props.padding,
        fontSize: "16px",
        borderRadius : "10px"
      }}
    >
      {props.children}
    </Button>
  );
};

export default BlueButton;
