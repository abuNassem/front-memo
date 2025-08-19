import { Tproduct } from "./tproduct"

export type Tcartslice={
    productfullinfo:Tproduct[],
    loading:'pending'|'succeeded'
}
