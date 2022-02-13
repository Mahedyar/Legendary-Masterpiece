import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemsMenu from "./ItemsMenu";
import { useState } from "react";
import ModalMenu from "./ModalMenu";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        fontSize: "0.8125rem",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function MenuButton() {
  const [show, setShow] = useState({ show: false, id: null });
  const [open, setOpen] = useState({ show: false, id: null });
  const handleOpen = (key) => setOpen({ show: true, id: key });
  const handleClose = (key) => setOpen({ show: false, id: key });
  const hoverIcon = (key) => setShow({ show: true, id: key });
  const unHoverIcon = (key) => setShow({ show: false, id: key });

  return (
    <>
      {open.show && <ModalMenu  onOpen={open.show} />}
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            direction: "rtl",
          }}
        >
          {ItemsMenu.map((item) => (
            <Item
              onMouseEnter={() => hoverIcon(item.id)}
              onMouseLeave={function (event) {
                // handleClose();
                unHoverIcon();
              }}
              onMouseOver={handleOpen}
              className={"btn-menu"}
              key={item.id}
            >
              {item.title}
              {show.show && show.id === item.id ? (
                <ExpandMoreIcon
                  className={"icon-menu"}
                  sx={{ fontSize: 10.5 }}
                />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 10.5 }} />
              )}
            </Item>
          ))}
        </Box>
      </div>
    </>
  );
}
