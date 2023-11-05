import { NavBar, ProductCard } from "@components/organisms";
import { useFetchData } from "@hooks/useFetchData";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { nama } = useParams();
  const { data } = useFetchData(`category/${nama}`);


  return (
    <>
      <NavBar />
      <div className="mt-[10vh]">
        <div className="my-5 flex justify-center ">
          <h1 className="border-b border-secondary text-3xl font-semibold text-primary shadow-md">
            Category Product
          </h1>
        </div>
        <section className="my-10 flex flex-wrap justify-center gap-8 ">
        {data?.map(datas => 
        <>
        <ProductCard product={datas} />
        
        </>
            
        )}
        </section>
      </div>
    </>
  );
};
