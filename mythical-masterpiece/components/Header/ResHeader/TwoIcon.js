import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import * as React from "react";


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        height: "16px",
        borderRadius: "5px",
        width: "17px",
        minWidth: "17px",
        backgroundColor: "#0082fd",
        bottom: 5,
    },
}));

const Item = styled(Paper)(({ theme }) => ({

    textAlign: 'center',
    boxShadow:0,

}));
export default function TwoIcon(){
    return(
        <>

            <Stack direction="row" spacing={2}>
                <Item>

                    <IconButton aria-label="cart">
                        <StyledBadge
                            badgeContent={0}
                            color="primary"
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            showZero>
                            <ShoppingCartOutlinedIcon sx={{ color: "black" ,marginTop:-1}} />
                        </StyledBadge>
                    </IconButton>

                </Item>
                <Item>
                    <PersonOutlineIcon/>
                </Item>
            </Stack>
        </>
    )
}