import React, { useEffect, useState } from 'react';

const useGetProducts = (URL_API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const req = await fetch(URL_API);
        const resp = await req.json();
        setProducts(resp);
    }, []);

    return {
        products
    };
}

export default useGetProducts;
