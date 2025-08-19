export type Tproduct = {
    id: number,
    title: string,
    cat_prefix: string,
    img: string,
    price: string,
    quantity: number,
    isInCart: boolean,
    isFavorit: boolean,
    discount: number,
    about: string,
    color: string,
    size: "XS" | "S" | "M" | "L" | "XL" | "2XL",
    brand: string,
    gender: "male" | "female" | "unisex";
    material: "cotton" | "polyester" | "wool";
    subcategory: string;
    rating: number;
    addedDate: string;
}

