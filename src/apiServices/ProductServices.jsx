
export const getProductList = async (searchTerm) =>{
    const productList = await fetch(`http://localhost:8000/products?q=${searchTerm || ''}`)
    const data  = await productList.json()
   return data;
}

export const getUpcommingProducts = async () => {
    const response = await fetch("http://localhost:8000/upcomming_products")

    const data  = await response.json()
    return data
}

export const getProductDetails = async (id) => {
    const response = await fetch(`http://localhost:8000/products/${id}`)

    const data  = await response.json()
    return data
}



