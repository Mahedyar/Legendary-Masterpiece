import {Box,Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import lamp from '../../../assets/Images/ProductImage/lamp.jpg';
import LocalMaxImage from "./LocalMaxImage";
import DataCard from "./DataCard";
import Icon from "./Icon";
export default function BoxMaxImage(){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(1),
        textAlign: 'center',
        boxShadow:'none'
    }));
    return(
        <>
            <Box
                sx={{
                    width: 430,
                    height: 420,
                    backgroundColor: '#f5f5f5',
                    borderRadius:3,
                    margin:'auto',
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={9.5}>
                            {DataCard.map((item)=>
                                <Item key={item.product}>{item.boxMax.map((img)=><LocalMaxImage key={item.product}><img className={'Img-product'} width={350} height={350} src={img} /></LocalMaxImage>)}</Item>
                            )}
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item><Icon/></Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}