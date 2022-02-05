import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from '@mui/icons-material/Message';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductBigDescription() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
          <Tab icon={<MessageIcon />} iconPosition="end" label="نظر کاربران" />
          <Tab icon={<ReceiptLongIcon />} iconPosition="end" label="مشخصات" />
          <Tab icon={<EqualizerIcon />} iconPosition="end" label="نقد و بررسی" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        دستمال کاغذی دولایه بی‌تا مدل white در بسته 10 عددی یک انتخاب خوب و
        اقتصادی است. از این دستمال کاغذی در ادارات، رستوران‌ها، خانه، ماشین و
        هرکجایی که به دستمال نیاز باشد می‌توان استفاده کرد. هر بسته از این محصول
        حاوی 100 برگ دستمال دولایه است که در بسته بندی پلاستیکی قرار گرفته است.
        بسته‌های دستمال به راحتی در جعبه‌های دستمال قرار می‌گیرند و بدون مزاحمت
        برای استفاده آماده خواهد بود. همیشه گران بودن دستمال نشان از کیفیت آن
        نمی‌تواند باشد و ممکن است موارد دیگری باعث بالا رفتن قیمت آن شده است.
        دستمال بی‌تا مدل white با ضخامت مناسب و جنس لطیفی که دارد خود را به
        عنوان یک انتخاب اقتصادی برای استفاده مشتری نشان می‌دهد. این محصول از
        مواد اولیه بهداشتی و با کیفیت بالا ساخته شده است. دستمال بی تا با جنس
        لطیفی که دارد برای استفاده بسیار مناسب بوده و برگ‌های دستمال دارای یک
        بافت و طرح هستند که استفاده از آن را لذت بخش‌تر می‌کند و قدرت جذب آب را
        نیز مناسب کرده است. بی‌تا یک برند شناخته شده در زمینه تولید انواع دستمال
        کاغذی است. در این نوع محصول نیز کیفیت خوبی ارائه شده است. در تولید این
        محصول تمام شرایط بهداشتی رعایت شده است و جنس دستمال با انسجام خوبی که
        دارد زود پاره نمی‌شود
      </TabPanel>
    </Box>
  );
}
