
import {Button,ButtonGroup,Box} from "@mui/material"

export default function SymbolsHolder() {
    return (
        <>
            <ButtonGroup variant="outline" >
                <Box sx={{marginRight:3}}>
                    <Button><img src={"https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/namad/lendo.svg"}/></Button>
                    <p>برخواسته از تیم لندو</p>
                </Box>
                <hr  height={'1vh'}/>
                <div>
                    <Button><img src={"https://timcheh.com/static/images/namad/kasbokar.png"}/></Button>
                </div>
                <div>
                    <Button><img src={"https://timcheh.com/static/images/namad/resaneh.png"}/></Button>
                </div>
            </ButtonGroup>

          </>
    )
}