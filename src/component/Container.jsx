import ProductCard from './ProductCard'
import Footer from './Footer'
import { getProducts } from '../repository';
import { useState, useEffect } from "react";

function Container({ page, cat, sort, search }) {

  const [cardsList, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      let cards = await getProducts(
        page,
        cat, // category
        search, // search
        sort // sortDirection
      );
      setCards(cards.map((card, i) => {
        return (
          <ProductCard productInformation={card} key={i} />
        )
      }));
    };
    getCards();
  }, [page, cat, sort, search])

  return (
    <>
      <div className="product-cards">
        { cardsList }
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Container;