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
                providers : [
                    {
                        id : 1,
                        name : "Агрегатор",
                        categoryView : "Маркетплейс",
                        component : markRaw(AggregateSideBar)
                    },
                    {
                        id : 2,
                        name : "WB",
                        categoryView : "Маркетплейс",
                        component : markRaw(WbSideBar)
                    },
                    {
                        id : 3,
                        name : "OZON",
                        categoryView : "Маркетплейс",
                        component : markRaw(OzonSideBar)
                    }
                ]
            },
            {
                name : "Мессенджеры",
                providers : [
                    {
                        id : 4,
                        name : "Telegram",
                        categoryView : "Мессенджер",
                        component : markRaw(TelegramSideBar)
                    }
                ]
            }
        ]
    }
    
}

export default new MainCategoryService() as IMainCategoryService;