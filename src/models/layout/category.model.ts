import type { ProviderView } from "./provider.model";

export interface CategoryView{
    name : string;
    providers : ProviderView[];
}