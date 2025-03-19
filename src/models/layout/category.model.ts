import type { ModuleView } from "./module.model";

export interface CategoryView{
    name : string;
    modules : ModuleView[];
}