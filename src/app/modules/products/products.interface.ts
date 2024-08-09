
export type TProduct = {
    name: string;
    category: string;
    description: string;
    image: string[];
    price: number;
    inStock: number;
    productType:"Special"|"Featured"|"Offerd";
    isDeleted: boolean;
}


