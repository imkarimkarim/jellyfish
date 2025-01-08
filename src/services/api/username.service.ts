import { mainApi } from "../../config/axios.config";
import { ApiResponse } from "../../types/api.types";

export interface UsernameCheckResponse {
    available: boolean;
    message: string;
}

export const usernameService = {
    checkAvailability: (username: string) =>
        mainApi.post<ApiResponse<UsernameCheckResponse>>(
            `/username/check`,
            username,
        ),
};
