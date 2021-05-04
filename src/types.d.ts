/*
{
id:1,
title:'...',
price:'...',
category:'...',
description:'...',
image:'...'
},
*/ 

type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

// Define a state type
type InitialStateType = {
    products: Product[];
    cart: Product[];
    product: Product | undefined;
    getProducts: () => void;
    getSingleProduct: (productId:number) => void;
};

