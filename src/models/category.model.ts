import type { Component } from "vue";

export enum MainCategory{
    WB,
    Ozon,
    Aggregate,
    Telegram
}

export interface MainCategoryView{
    name : string;
    value : MainCategory,
    component : Component
}