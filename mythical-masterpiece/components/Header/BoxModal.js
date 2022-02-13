import Box from '@mui/material/Box';
import ListBoxModal from "./ListBoxModal";
import DataSubtitle from "./DataSubtitle";
function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{

                p: 1,
                fontSize: '0.8125rem',
                direction:'rtl',
                ...sx,

            }}
            {...other}
        />
    );
}

export default function BoxModal() {
    return (
        <div style={{ width: '100%' }}>
            {DataSubtitle.map((item)=> <Box key={item.id} sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',direction:'rtl' }}>
                {item.map((value)=><Item key={item.title}><ListBoxModal DataSubtitle={DataSubtitle} title={item.title} subTitle={item.subTitle}/></Item>)}
                </Box>
            )}


                {/*<Item><ListBoxModal/></Item>*/}
                {/*<Item sx={{background:'#fafafa'}}><ListBoxModal/></Item>*/}
                {/*<Item><ListBoxModal/></Item>*/}
                {/*<Item sx={{background:'#fafafa'}}><ListBoxModal/></Item>*/}
                {/*<Item><ListBoxModal/></Item>*/}
        </div>
    );
}
