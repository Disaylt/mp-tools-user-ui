import type { Component } from "vue";

export interface ModuleView{
    type : string;
    path : string;
    name : string;
    categoryView : string;
    component : Component
}