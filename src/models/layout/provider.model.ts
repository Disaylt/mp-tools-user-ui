import type { Component } from "vue";

export interface ProviderView{
    id : number;
    name : string;
    categoryId : number;
    categoryView : string;
    component : Component
}