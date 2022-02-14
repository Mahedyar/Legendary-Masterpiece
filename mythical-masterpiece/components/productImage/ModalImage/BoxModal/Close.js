import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

export default function Close(props) {
    function Item(props) {
        const {sx, ...other} = props;
        return (
            <Box
                sx={{

                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#f5f5f5' : '#f5f5f5'),
                    color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                    borderRadius: "100%",
                    width: 40,
                    height: 40,
                    paddingLeft: 1,
                    paddingTop: 1,

                    ...sx,
                }}
                {...other}
            />
        );
    }


    return (

        <div style={{width: '100%'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Item><CloseIcon onClick={props.onConfirm}/></Item>

            </Box>
        </div>
    )
}