import type { AxiosResponse } from "axios";
import type { GroupView } from "../../../../../models/common/group.model";
import type { ModuleView } from "../../../../../models/layout/module.model";
import type { NewWbSellerCompanyModel, WbSellerCompanyModel } from "../../../../../models/panel/marketplaces/wb/seller/company.model";
import apiService from "../../../../../core/api.service";

interface IWbSellerCompanyService{
    getMenu() : Promise<AxiosResponse<GroupView<string, ModuleView>[]>>;
    create(company : NewWbSellerCompanyModel) : Promise<AxiosResponse<WbSellerCompanyModel>>;
}

class WbSellerCompanyService implements IWbSellerCompanyService{

    create(company: NewWbSellerCompanyModel): Promise<AxiosResponse<WbSellerCompanyModel>> {
        return apiService.post<WbSellerCompanyModel>("/api/v1/wb/seller/companies", company);
    }

    async getMenu(): Promise<AxiosResponse<GroupView<string, ModuleView>[]>> {

        await delay(2000);

        const result = {
            data: [
                {
                    key: "Собственник",
                    values: [
                        { id: 1, name: "Test - 1 5434 eegfsdfgsert 54tgsdtg5w44tgsdg dfsdf sdfs" },
                        { id: 2, name: "Test - 2" },
                        { id: 3, name: "Test - 3" }
                    ]
                },
                {
                    key: "Подписчик",
                    values: [
                        { id: 4, name: "Test - 534" }
                    ]
                }
            ]
        } as AxiosResponse<GroupView<string, ModuleView>[]>;

        return result;
    }

}

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default new WbSellerCompanyService() as IWbSellerCompanyService;