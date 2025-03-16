import type { AxiosResponse } from "axios";
import apiService from "../../core/api.service";
import type { IdentityDetails, Login, AuthResult, NewUser, NewAuthDetails, AuthInfo } from "../../models/auth/user.model";

interface IUserServcie{
    getInfo() : Promise<AxiosResponse<IdentityDetails>>;
    login(data : Login) : Promise<AxiosResponse<AuthResult>>;
    register(newUser : NewUser) : Promise<AxiosResponse<AuthResult>>;
    logout() : Promise<AxiosResponse>;
    refresh(data : NewAuthDetails) : Promise<AxiosResponse<AuthInfo>>;
}

class UserServcie implements IUserServcie{
    refresh(data: NewAuthDetails): Promise<AxiosResponse<AuthInfo>> {
        return apiService.post<AuthInfo>("/api/auth/v1/tokens/refresh", data);
    }
    logout(): Promise<AxiosResponse> {
        return apiService.put("/api/auth/v1/users/logout")
    }
    login(data : Login): Promise<AxiosResponse<AuthResult>> {
        return apiService.post<AuthResult>("/api/auth/v1/users/login", data);
    }
    register(newUser : NewUser): Promise<AxiosResponse<AuthResult>> {
        return apiService.post<AuthResult>("/api/auth/v1/users/register", newUser);
    }
    getInfo(): Promise<AxiosResponse<IdentityDetails>>{
        return apiService.get<IdentityDetails>("/api/identity/v1/users/details");
    }

}

export default new UserServcie() as IUserServcie;