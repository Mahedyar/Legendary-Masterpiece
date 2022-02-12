import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '61%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:'70%',
    bgcolor: '#fff',
   outline:'none',
    p: 3,
};
export default function ModalMenu(props){


    return(
        <>

            <Modal
                open={props.onOpen}
                   onClose={props.onConfirm}>
                <Box sx={style} >
                    <h1>hello</h1>
                    <h1>hello</h1>


                </Box>
            </Modal>
        </>
    )
}