import axios from 'axios'


const API_URL = 'https://ws-chat.omsktec-playgrounds-1.ru/';

const MessengerAPIInstance = axios.create({
    baseURL: API_URL
});

export const MessengerAPI = {
    regUser: async (userID: string) => {
        try{
            const res = await MessengerAPIInstance.post('/login', {
                id: userID
            })
            return res
        } catch(error) {
            console.log(error)
        }
    },
    getMessages: async () => {
        
    }
}