import type { AuthDetails, NewAuthDetails } from "../../models/auth/user.model";
import router from "../../route/route";
import { useAuthStore } from "../../store/auth/auth.store";
import userService from "./user.service";

interface IAuthService {
    refreshTokens() : Promise<void>;
    addTokens(data : AuthDetails | null) : void;
    getRefreshToken( ) : string | null;
    getAccessToken( ) : string | null;
    logout() : Promise<void>;
 }

class AuthService implements IAuthService{

    static accessTokenKey = "accessToken" as string;
    static refreshTokenKey = "refreshToken" as string;

    async logout() : Promise<void> {
        await userService.logout()
            .then((_) => {
                useAuthStore().clear();
                this.deleteTokenFromLocalStorage();
                router.push("/auth/login")
            })
    }

    addTokens(data : AuthDetails | null){
        if(data){
            localStorage.setItem(AuthService.accessTokenKey, data.authToken);
            localStorage.setItem(AuthService.refreshTokenKey, data.sessionToken);

            useAuthStore().clear();
        }
    }

    getAccessToken( ) : string | null{
        const authStore = useAuthStore();

        if(!authStore.accessToken){
            authStore.accessToken = localStorage.getItem(AuthService.accessTokenKey);
        }

        return authStore.accessToken;
    }

    getRefreshToken( ) : string | null{
        const authStore = useAuthStore();

        if(!authStore.refreshToken){
            authStore.refreshToken = localStorage.getItem(AuthService.refreshTokenKey);
        }

        return authStore.refreshToken;
    }

    async refreshTokens(): Promise<void> {

        const refreshToken = this.getRefreshToken();

        if(!refreshToken){
            return;
        }

        const newAuthDetails = {
            refreshToken : refreshToken
        } as NewAuthDetails;

        await userService.refresh(newAuthDetails)
            .then((resp) => {
                
                if(resp.data.isValid && resp.data.details){

                    this.addTokens(resp.data.details);

                    return;
                }
                else{

                    useAuthStore().clear();
                    this.deleteTokenFromLocalStorage();

                    throw new Error();
                }
            })
            .catch((error) => {
                return Promise.reject(error);
            })
    }

    private deleteTokenFromLocalStorage(){
        localStorage.removeItem(AuthService.accessTokenKey);
        localStorage.removeItem(AuthService.refreshTokenKey);
    }
}

export default new AuthService() as IAuthService;