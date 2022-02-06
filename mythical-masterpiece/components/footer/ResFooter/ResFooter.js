import ResTopHolder from '../../footer/ResFooter/ResTopHolder/ResTopHolder';
import ButtonFooter from '../../footer/ResFooter/Button';
import ResTitr from '../ResFooter/ResTitr/ResTitr';
import ResSymbolsHolder from '../ResFooter/ResSymbolsHolder';
import ResAboutFooter from '../ResFooter/ResAboutFooter';
import ResCopyRight from '../ResFooter/ResCopyRight'
export default function ResFooter() {
    return (
        <>
            <ResTopHolder/>
            <ButtonFooter/>
            <hr/>
            <ResTitr/>
            <ResSymbolsHolder/>
            <ResAboutFooter/>
            <ResCopyRight/>
        </>
    )


}