import type { Component } from "vue";

export interface ModuleType{
    type : string;
    path : string;
    name : string;
    description : string;
    categoryView : string;
    component : Component
}

export interface ModuleView{
    id : number,
    name : string
}