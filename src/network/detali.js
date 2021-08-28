import { request } from "./request";
export function getdetali(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}