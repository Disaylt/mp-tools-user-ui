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
                        description :"Объедените компании на маркетплейсах в 1 единую компанию. Упрощает управление и расширяет статистику и аналитику.",
                        component : markRaw(AggregateSideBar)
                    },
                    {
                        name : "WB",
                        type : "company",
                        path : "wb_seller",
                        description :"Используйте автоматизацию, статистику и аналитику для улучшения продаж на WB.",
                        categoryView : "Маркетплейс",
                        component : markRaw(WbSideBar)
                    },
                    {
                        name : "OZON",
                        type : "",
                        path : "",
                        description :"Используйте автоматизацию, статистику и аналитику для улучшения продаж на OZON.",
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
                        description :"Подписывайтесь на уведомления сервисов и селлерских компаний, а так же управлйяте инструментами и просматривайте отчеты в Telegram.",
                        categoryView : "Мессенджер",
                        component : markRaw(TelegramSideBar)
                    }
                ]
            }
        ]
    }
    
}

export default new MainCategoryService() as IMainCategoryService;