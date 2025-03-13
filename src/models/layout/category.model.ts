import type { ProviderView } from "./provider.model";

export interface CategoryView{
    id : number;
    name : string;
    providers : ProviderView[];
}