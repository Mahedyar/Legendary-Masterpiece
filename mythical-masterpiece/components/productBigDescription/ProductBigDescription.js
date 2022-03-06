import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MessageIcon from "@mui/icons-material/Message";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Typography from "@mui/material/Typography";
import Moshakhasat from "./Moshakhasat";
import CommentsPart from "./CommentsPart/CommentsPart";
import useMediaQuery from "@mui/material/useMediaQuery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const matches = useMediaQuery("(min-width:769px)");

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={
            matches
              ? { p: 3, direction: "rtl" }
              : { marginTop: "15px", direction: "rtl" }
          }
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",


    marginRight: theme.spacing(5),
    fontWeight: "bold",
    color: "#8c8c8c",

    padding: "0",

    "&.Mui-selected": {
      color: "#141414",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fafafa",
    },
  })
);

export default function CustomizedTabs(props) {
  const matches = useMediaQuery("(min-width:769px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "white" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#fafafa",
            width: "100%",
          }}
        >
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab
              icon={<MessageIcon sx={{ width: "13px", height: "13px" }} />}
              iconPosition="end"
              label="نظر کاربران"
              sx={
                matches
                  ? { fontSize: "15px" }
                  : { fontSize: "13px", width: "30%", marginRight: "0" }
              }
            />
            <StyledTab
              icon={<ReceiptLongIcon sx={{ width: "13px", height: "13px" }} />}
              iconPosition="end"
              label="مشخصات"
              sx={
                matches
                  ? { fontSize: "15px" }
                  : { fontSize: "13px", width: "30%", marginRight: "0" }
              }
            />
            <StyledTab
              icon={<EqualizerIcon sx={{ width: "13px", height: "13px" }} />}
              iconPosition="end"
              label="نقد و بررسی"
              sx={
                matches
                  ? { fontSize: "15px" }
                  : { fontSize: "13px", width: "30%", marginRight: "0" }
              }
            />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CommentsPart product={props.product}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Moshakhasat properties={props.properties} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{padding : "10px 16px 24px 16px" , fontSize : "14px"}}>{props.description}</Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
