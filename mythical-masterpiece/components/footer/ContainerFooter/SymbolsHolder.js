
import {Button,ButtonGroup,Box} from "@mui/material"

export default function SymbolsHolder() {
    return (
        <>
            <ButtonGroup variant="outline" >
                <div>
                    <Button><img src={"https://timcheh.com/static/images/namad/resaneh.png"}/></Button>
                </div>
                <div>
                    <Button sx={{borderLeft:'1px solid #ced4da'}}><img src={"https://timcheh.com/static/images/namad/kasbokar.png"}/></Button>
                </div>
                <Box sx={{marginRight:3 }}>
                    <Button><img src={"https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/namad/lendo.svg"}/></Button>
                    <p style={{fontSize:'0.8125rem'}}>برخواسته از تیم لندو</p>
                </Box>
            </ButtonGroup>

          </>
    )
}