import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fbdc8ac6-3adb-4b2e-b446-850daffbb95c"
    }
})

export const friendsAPI = {
    getFriends (page=1,pageSize=10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}



