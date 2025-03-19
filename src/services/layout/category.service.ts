import { markRaw } from "vue";
import type { CategoryView } from "../../models/layout/category.model";
import AggregateSideBar from "../../components/layout/sidebars/AggregateSideBar.vue";
import WbSideBar from "../../components/layout/sidebars/WbSideBar.vue";
import OzonSideBar from "../../components/layout/sidebars/OzonSideBar.vue";
import TelegramSideBar from "../../components/layout/sidebars/TelegramSideBar.vue";

interface IMainCategoryService{
    getCategories() : CategoryView[]
}

class MainCategoryService implements IMainCategoryService{

    getCategories(): CategoryView[] {
        return[
            {
                name : "Маркетплейсы",
                modules : [
                    {
                        name : "Агрегатор",
                        type : "",
                        path : "",
                        categoryView : "Маркетплейс",
                        component : markRaw(AggregateSideBar)
                    },
                    {
                        name : "WB",
                        type : "company",
                        path : "wb_seller",
                        categoryView : "Маркетплейс",
                        component : markRaw(WbSideBar)
                    },
                    {
                        name : "OZON",
                        type : "",
                        path : "",
                        categoryView : "Маркетплейс",
                        component : markRaw(OzonSideBar)
                    }
                ]
            },
            {
                name : "Мессенджеры",
                modules : [
                    {
                        name : "Telegram",
                        type : "",
                        path : "",
                        categoryView : "Мессенджер",
                        component : markRaw(TelegramSideBar)
                    }
                ]
            }
        ]
    }
    
}

export default new MainCategoryService() as IMainCategoryService;