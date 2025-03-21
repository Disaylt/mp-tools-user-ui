import type { ModuleType } from "./module.model";

export interface CategoryView{
    name : string;
    modules : ModuleType[];
}