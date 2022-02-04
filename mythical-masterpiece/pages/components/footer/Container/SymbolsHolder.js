
import {Button,ButtonGroup} from "@mui/material"
export default function SymbolsHolder() {
    return (
        <>
            <ButtonGroup variant="text" aria-label="text button group">
                <div>
                    <Button><img src={"https://images.timcheh.com/1/fill/80/80/sm/true/plain/https://static.timcheh.com/uploads/manual/images/namad/lendo.svg"}/></Button>
                    <p>برخواسته از تیم لندو</p>
                </div>
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