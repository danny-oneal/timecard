import { axios } from "./axios";

export const login = async (authInfo: { username: string; password: string }) => {
    return axios.post("/auth/login", authInfo);
};
