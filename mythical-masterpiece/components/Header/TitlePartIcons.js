import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import shahneshin from "../../assets/Images/Header/shahneshin.svg";
import giftcard from "../../assets/Images/Header/card_giftcard.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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



export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        alignItems={"center"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        height={"30px"}
      >
        <Item>
          {" "}
          <Chip
              className={'Chip-header'}
            label="در تیمچه بفروش ! "
            component="a"
            href="#basic-chip"
            variant="outlined"
            clickable
            color="primary"
          />
        </Item>

        <Item>
          <img style={{width : "20px" , height : "20px"}}src={shahneshin.src} />
        </Item>
        <Item>
          <img style={{width : "20px" , height : "20px"}} src={giftcard.src} />
        </Item>
        <Item>
          <HelpOutlineIcon sx={{width : "20px" , height : "20px"}} />
        </Item>
        <Item>
          <PermIdentityIcon sx={{width : "20px" , height : "20px"}}/>
        </Item>
        <Item>
          {" "}
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={0}
              color="primary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              showZero>
              <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
            </StyledBadge>
          </IconButton>
        </Item>
      </Stack>
    </div>
  );
}
