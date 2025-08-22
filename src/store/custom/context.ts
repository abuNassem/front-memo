export type    Ttarget={
   name:string,
   func:()=>void
}
export type TlightProduct = {
  id: number;
  title: string;
  img: string;
  price: string;
  discount: number;
  about:string,
  isInCart:boolean,
  rating:number,
  brand:string,
  material:string,
  color:string,
  size:string,
  isFavorit:boolean
}
type Order = {
  id: number;
  title: string;
  price: number;
  // ... باقي الخصائص
};
export type Tcontext={
   openMenue:boolean,
   setOpenMenue: React.Dispatch<React.SetStateAction<boolean>>;
   isSure:boolean,
   setIsSure: React.Dispatch<React.SetStateAction<boolean>>;
   target:Ttarget|null,
   setTarget:React.Dispatch<React.SetStateAction<Ttarget|null>>;
   current:TlightProduct|null;
   setCurrent:React.Dispatch<React.SetStateAction<TlightProduct|null>>,
   filterMode:boolean,
   setFilterMode:React.Dispatch<React.SetStateAction<boolean>>,
   alert:{isOpen:boolean,func:'warning'|'info'|'success',textAlert:string},
   setAlert:React.Dispatch<React.SetStateAction<{isOpen:boolean,func:'warning'|'info'|'success',textAlert:string}>>
   isSearch:boolean,
   setIsSearch:React.Dispatch<React.SetStateAction<boolean>>
   isPurchases:boolean,
   setIsPurchases:React.Dispatch<React.SetStateAction<boolean>>,
   setOrdersApi:React.Dispatch<React.SetStateAction<[]>>,
   ordersApi:Order[],
   refTop: React.RefObject<HTMLDivElement>;
}
