import { Tproduct } from "../custom/tproduct"
export type Tlaoding={
    record:Tproduct[],
    loading:'idle'| 'pending'|'succeeded'|'failed',
    error:string|null
}