import Box from '@mui/material/Box';
import ItemL from '../../ResFooter/ResTitr/ItemL';
import ItemR from '../../ResFooter/ResTitr/ItemR'


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{

                m: 1,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}
export default function ResTitr(){
    return(
        <>
            <div style={{ width: '100%' }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        justifyContent: 'space-between',

                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <Item><ItemR/></Item>
                    <Item><ItemL/></Item>



                </Box>

            </div>
        </>
    )
}