import type { AxiosResponse } from "axios";
import type { NotificationsQuery } from "../../../models/panel/notifications/notifications.model";
import apiService from "../../../core/api.service";

interface INotificationsService{
    getRange(query : NotificationsQuery) : Promise<AxiosResponse<Notification[]>>;
}

class NotificationsService implements INotificationsService{

    getRange(query: NotificationsQuery): Promise<AxiosResponse<Notification[]>> {
        const path = `/api/v1/user-notifications/notifications`
        const queryValues = [`take=${query.take}`, `skip=${query.skip}`] as string[];

        if(query.isRead){
            queryValues.push(`isRead=${query.isRead}`)
        }

        if(query.category){
            queryValues.push(`category=${query.category}`)
        }

        const url = `${path}?${queryValues.join('&')}`

        return apiService.get<Notification[]>(url);
    }
}

export default new NotificationsService() as INotificationsService;