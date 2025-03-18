import type { AuthDetails, NewAuthDetails } from "../../models/auth/user.model";
import { useAuthStore } from "../../store/auth/auth.store";
import userService from "./user.service";

interface IAuthService {
    refreshTokens() : Promise<void>;
    addTokens(data : AuthDetails | null) : void;
    getRefreshToken( ) : string | null;
    getAccessToken( ) : string | null;
 }

class AuthService implements IAuthService{


    addTokens(data : AuthDetails | null){
        if(data){
            localStorage.setItem("accessToken", data.authToken);
            localStorage.setItem("refreshToken", data.sessionToken);

            useAuthStore().clear();
        }
    }

    getAccessToken( ) : string | null{
        const authStore = useAuthStore();

        if(!authStore.accessToken){
            authStore.accessToken = localStorage.getItem("accessToken");
        }

        return authStore.accessToken;
    }

    getRefreshToken( ) : string | null{
        const authStore = useAuthStore();

        if(!authStore.refreshToken){
            authStore.refreshToken = localStorage.getItem("refreshToken");
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
                    localStorage.clear();

                    throw new Error();
                }
            })
            .catch((error) => {
                return Promise.reject(error);
            })
    }
}

export default new AuthService() as IAuthService;