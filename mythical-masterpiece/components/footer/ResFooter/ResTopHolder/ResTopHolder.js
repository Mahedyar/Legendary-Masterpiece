import ResIcon from '../ResTopHolder/ResIcon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p:0.7,
                m: 1,
                border: '0px solid',
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}
export default function ResTopHolder(){

    return(
        <>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        bgcolor: '#f5f5f5',
                        borderRadius: 1,
                        direction:'rtl'
                    }}
                >
                    <Item><span style={{color:'#8c8c8c'}}>ﺷﻤﺎره ما: </span>021-91012959</Item>
                    <Item>ما در شبکه‌های اجتماعی حجره داریم!</Item>
                    <Item><ResIcon/></Item>
                </Box>

            </div>
        </>
    )
}