import type { Component } from "vue";

export interface ProviderView{
    id : number;
    name : string;
    categoryView : string;
    component : Component
}