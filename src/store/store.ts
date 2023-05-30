import { defineStore } from 'pinia';
import { Api } from '../utils/api';

export const userStore = defineStore('UserInfo', {
    state: () => {
        return {
            userAD: 'TIM.ZT.WU',
            token: 'AAAAAAAAABBBB',
        }
    },
    actions: {
        login: async () => {
            console.log('login')
            Api.get(Api.SSORequest, "/auth", {});
        },
    },
    getters: {

    }

})