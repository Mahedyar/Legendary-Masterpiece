import Link from 'next/link'

import SearchComponent from "../components/SearchPage/SearchComponent";

const Home = () => {
  return (
      <Link href={'/search'}>to search Page</Link>
  )
};

export default Home;
