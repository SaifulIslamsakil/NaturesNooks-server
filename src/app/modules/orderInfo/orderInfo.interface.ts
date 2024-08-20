
type TProductData = {
    id: string;
    quantity: number
}
export type TOrderInfo = {
    name: string;
    email: string;
    address: string;
    state: string;
    city: string;
    zipCode: number;
    cardNumber: number;
    phoneNumber: string;
    date: string;
    cvv: number;
    productData: TProductData[]

}