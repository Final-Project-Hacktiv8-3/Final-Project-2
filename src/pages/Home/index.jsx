import { NavBar, CarouselItem, Category, ProductCard } from "@components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/action";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <CarouselItem />
      <Category />
      <div className="flex items-center gap-4 px-6 md:px-12">
        <h3 className="text-center text-xl font-bold  md:text-left">
          Popular Products
        </h3>
        <Link to="/products" className="text-sm text-accent">
          See All
        </Link>
      </div>
      <div className="my-10 flex flex-wrap justify-center gap-8">
        {products.data.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
