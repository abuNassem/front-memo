type infoproducts = {
   id:number, title: string, price: string, quantity: number,discount:number
}
export type TGetPrice = {
    record: { listPrice: number, products: infoproducts[] },
    error: string | null
}