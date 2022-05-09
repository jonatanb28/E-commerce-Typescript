export type ProductFetch = {
    products: ProdutItem[],
    isLoading: boolean,
    isError: boolean
}

export type ProdutItem = {
    id: number;
    category: string;
    title: string;
    image: string;
    price: number;
}