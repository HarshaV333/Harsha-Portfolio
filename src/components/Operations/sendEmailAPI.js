import { apiConnector } from "./apiConnector"
import { endpoints } from "./apis"

const {SENDMAIL_API} = endpoints

export function sendEmail(data){
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", SENDMAIL_API, data);
            console.log("Send Mail API Response....", response);
        } catch (error) {
            console.log("API Error", error);
        }
    }
}