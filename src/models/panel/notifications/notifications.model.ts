export interface Notification{
    id : string;
    userId : string;
    message : string;
    created : Date;
    isRead : boolean;
    title : string | null;
    category : number;
    categoryView : string;
}

export interface NotificationsQuery{
    category : number | null;
    isRead : boolean | null;
    take : number;
    skip : number;
}