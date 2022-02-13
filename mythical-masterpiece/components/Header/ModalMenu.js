import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import BoxModal from "./BoxModal";

const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "68%",
  bgcolor: "#fff",
  outline: "none",
  overflow:'hidden',
};
export default function ModalMenu(props) {
  return (
    <>
      <Modal sx={{backgroundColor : "red", position : "unset"}} open={props.onOpen} >
        <Box onMouseLeave = {props.onClose}  sx={style}>
         <BoxModal/>
        </Box>
      </Modal>
    </>
  );
}
