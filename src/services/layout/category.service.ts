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
                id : 1,
                name : "Маркетплейсы",
                providers : [
                    {
                        id : 1,
                        name : "Агрегатор",
                        categoryId : 1,
                        categoryView : "Маркетплейс",
                        component : markRaw(AggregateSideBar)
                    },
                    {
                        id : 2,
                        name : "WB",
                        categoryId : 1,
                        categoryView : "Маркетплейс",
                        component : markRaw(WbSideBar)
                    },
                    {
                        id : 3,
                        name : "OZON",
                        categoryId : 1,
                        categoryView : "Маркетплейс",
                        component : markRaw(OzonSideBar)
                    }
                ]
            },
            {
                id : 2,
                name : "Мессенджеры",
                providers : [
                    {
                        id : 1,
                        name : "Telegram",
                        categoryId : 2,
                        categoryView : "Мессенджер",
                        component : markRaw(TelegramSideBar)
                    }
                ]
            }
        ]
    }
    
}

export default new MainCategoryService() as IMainCategoryService;