
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
    zipCode: string;
    cardNumber: string;
    phoneNumber: string;
    date: string;
    cvv: string;
    totalPrice:number;
    totalItem:number;
    productData: TProductData[]

}