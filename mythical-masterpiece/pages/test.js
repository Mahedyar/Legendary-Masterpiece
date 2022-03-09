import {Grid} from "@mui/material";

function Test() {
    return (
        <Grid container justifyContent={"center"} direction={"row-reverse"}>
            <Grid item  sx={{height: "100px", bgcolor: "red"}} lg={4} xs={12}>
                {/*<h1>kowsar</h1>*/}
            </Grid>
            <Grid item  sx={{height: "100px", bgcolor: "green"}} lg={5} xs={12}>
                {/*<h1>kowsar</h1>*/}
            </Grid>
            <Grid item  sx={{height: "100px", bgcolor: "yellow"}} lg={3}  xs={12}>
                {/*<h1>kowsar</h1>*/}
            </Grid>
        </Grid>
    )
}

export default Test