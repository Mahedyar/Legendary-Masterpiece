import Box from '@mui/material/Box';
import kasbokar from '../../../assest/Images/Footer/logo/kasbokar.png';
import lendo from '../../../assest/Images/Footer/logo/lendo.svg';
import resaneh from '../../../assest/Images/Footer/logo/resaneh.png';
import Typography from '@mui/material/Typography';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                ...sx,
            }}
            {...other}
        />
    );
}
export default function ResSymbolsHolder(){
    return(
        <>
            <div style={{ width: '100%' }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <Item><img src={kasbokar.src}/></Item>
                    <Item><img src={resaneh.src}/></Item>
                    <Item><img src={lendo.src}/><div><Typography variant="caption">برخواسته از تیم لندو</Typography></div></Item>

                </Box>

            </div>
        </>
    )
}