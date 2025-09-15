type infoproducts = {
   _id:string, title: string, price: string, quantity: number,discount:number
}
export type TGetPrice = {
    record: { listPrice: number, products: infoproducts[] },
    error: string | null
}