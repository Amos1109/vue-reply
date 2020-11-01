import * as http from "@/utils/request";

export const get_test = params => http.get("/test", params);

export const post_test = params => http.post("/test", params);

export const put_test = params => http.put("/test", params);

export const delete_test = params => http.deleteDate("/test" + params);
