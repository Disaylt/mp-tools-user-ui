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
        return apiService.post<AuthInfo>("/api/v1/auth/tokens/refresh", data);
    }
    logout(): Promise<AxiosResponse> {
        return apiService.put("/api/v1/auth/users/logout")
    }
    login(data : Login): Promise<AxiosResponse<AuthResult>> {
        return apiService.post<AuthResult>("/api/v1/auth/users/login", data);
    }
    register(newUser : NewUser): Promise<AxiosResponse<AuthResult>> {
        return apiService.post<AuthResult>("/api/v1/auth/users/register", newUser);
    }
    getInfo(): Promise<AxiosResponse<IdentityDetails>>{
        return apiService.get<IdentityDetails>("/api/v1/identity/users/details");
    }

}

export default new UserServcie() as IUserServcie;