import SearchComponent from "../../components/SearchPage/SearchComponent";

const searchPage = () => {

    return (
        <SearchComponent products={props.CardData} pricesArray={props.prices}/>
    )
}

export default searchPage;