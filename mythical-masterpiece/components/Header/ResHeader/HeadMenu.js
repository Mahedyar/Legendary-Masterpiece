import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import timchLogo from '../../../public/Images/Header/Timche.svg'
function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 0.65,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#f5f5f5' : 'grey.100'),
                borderRadius: '100%',
                ...sx,
                width:'35px',
                height:'35px'
            }}
            {...other}
        />
    );
}

export default function HeadMenu(props){
    return(
        <>
            <div style={{ width: '100%' }}>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop:'20px'
                    }}
                >
                    <Item sx={{alignItems:'center'}}><CloseIcon onClick={props.onClose} sx={{color:'#6c757d'}} /></Item>

                    <Item sx={{bgcolor:'',marginRight:'3rem'}}><img className={'logo-team'} src={timchLogo.src}/></Item>
                </Box>

            </div>
        </>
    )
}