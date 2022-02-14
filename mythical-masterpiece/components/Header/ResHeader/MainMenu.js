import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataMainMenu from "./DataMainMenu";

export default function MainMenu() {
    return (
        <>
            <Typography variant="h6" sx={{direction: 'rtl', fontWeight: "bold",padding:'5px 25px'}}>دسته بندی محصولات</Typography>
            {DataMainMenu.map((item)=>
                <Accordion key={item.id} variant='outlined' sx={{direction: 'rtl', border: 0, outline: 'none'}}>
                    <AccordionSummary
                        sx={{padding: '0 25px'}}
                        expandIcon={<ExpandMoreIcon sx={{fontSize: 15}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    {item.subTitle.map((value)=>
                        <AccordionSummary key={item.id}
                            sx={{padding: '0 25px',background:'#fafafa'}}
                            expandIcon={<ExpandMoreIcon sx={{fontSize: 15}}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{value}</Typography>
                        </AccordionSummary>
                    )}



                </Accordion>
            )}



        </>
    )
}