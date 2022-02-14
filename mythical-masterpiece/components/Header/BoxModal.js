import Box from "@mui/material/Box";
import ListBoxModal from "./ListBoxModal";
import DataSubtitle from "./DataSubtitle";
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        fontSize: "0.8125rem",
        direction: "rtl",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function BoxModal() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          direction: "rtl",
        }}
      >
        {DataSubtitle.map((item , index) => (
          <>
            <Box
              //   key={item.id}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                direction: "rtl",
                backgroundColor : index%2 === 1 ? "#fafafa" :"#fff"

              }}
            >
              {item.map((value) => (
                <Box>
                  <Item key={item.title}>
                    <ListBoxModal
                      title={value.title}
                      subTitle={value.subTitle}
                    />
                  </Item>
                </Box>
              ))}
            </Box>
          </>
        ))}
      </Box>

      {/*<Item><ListBoxModal/></Item>*/}
      {/*<Item sx={{background:'#fafafa'}}><ListBoxModal/></Item>*/}
      {/*<Item><ListBoxModal/></Item>*/}
      {/*<Item sx={{background:'#fafafa'}}><ListBoxModal/></Item>*/}
      {/*<Item><ListBoxModal/></Item>*/}
    </div>
  );
}
