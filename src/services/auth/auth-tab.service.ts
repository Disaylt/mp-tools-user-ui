import type { RouteTab } from "../../models/common/tab.model";

interface IAuthTabService{
    getCategories() : RouteTab[],
    getLogin() : RouteTab,
}

class AuthTabService implements IAuthTabService{
    getLogin(): RouteTab {
        const value = this.getCategories()
            .find(x=> x.key == "login");
        
        if(value === undefined){
            throw new Error("Login route tab not found")
        }

        return value;
    }

    getCategories(): RouteTab[] {
        return [
            { route: '/auth/login', key: "login", title: 'Авторизация' },
            { route: '/auth/register', key: "register", title: 'Регистрация' }
        ];
    }
    
}

export default new AuthTabService() as IAuthTabService;