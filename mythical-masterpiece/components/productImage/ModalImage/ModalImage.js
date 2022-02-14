import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BoxModal from "./BoxModal/BoxModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 950,
    height:'80vh',
    bgcolor: '#fff',
    boxShadow: 24,
    border:0,
    outline:'none',
    borderRadius:1,
    p: 4,
};

export default function ModalImage(props){

    return(
        <>

            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <BoxModal onClose={props.onClose}/>
                </Box>
            </Modal>
        </>
    )
}