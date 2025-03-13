import { markRaw } from "vue";
import { MainCategory, type MainCategoryView } from "../models/category.model";
import AggregateSideBar from "../components/layout/sidebars/AggregateSideBar.vue";
import OzonSideBar from "../components/layout/sidebars/OzonSideBar.vue";
import WbSideBar from "../components/layout/sidebars/WbSideBar.vue";
import TelegramSideBar from "../components/layout/sidebars/TelegramSideBar.vue";


interface IMainCategoryService{
    getCategories() : MainCategoryView[]
}

class MainCategoryService implements IMainCategoryService{

    getCategories(): MainCategoryView[] {
        return [
            {
                name: "Агрегатор",
                value: MainCategory.Aggregate,
                component : markRaw(AggregateSideBar)
            },
            {
                name: "OZON",
                value: MainCategory.Ozon,
                component : markRaw(OzonSideBar)
            },
            {
                name: "WB",
                value: MainCategory.WB,
                component : markRaw(WbSideBar)
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram,
                component : markRaw(TelegramSideBar)
            }
        ];
    }
    
}

export default new MainCategoryService() as IMainCategoryService;