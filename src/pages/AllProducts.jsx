import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import Card from '../components/Card';
import { getProductList } from '../apiServices/ProductServices';
import { useLocation } from 'react-router';

const AllProducts = () => {

    const [products, setProducts] = useState()
    const search = useLocation().search
    const searchTerm = new URLSearchParams(search).get('q')
    console.log(search, searchTerm);


    useEffect(()=>{
        async function fetchAllProduct() {
            try{
                const productsData = await getProductList(searchTerm);
                setProducts(productsData);
            }
            catch(error){
                alert(error.message)
            }
        }
        fetchAllProduct()
    },[])



    return (
        <section>
            <div className="header flex justify-between p-10 font-bold">
                <h1>All eBooks (15)</h1>
                <p className='bg-gray-200 p-3 rounded-md'>
                    <CiMenuKebab /></p>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 
            xl:grid-cols-3 p-10">
                {
                    products?.map((product)=>(
                        <article key={product.id}>
                            <Card product={product}/>
                        </article>
                    ))
                }
                {/* <Card/> */}
            </div>


        </section>
    )
}

export default AllProducts