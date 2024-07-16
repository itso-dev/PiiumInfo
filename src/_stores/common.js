import { defineStore } from 'pinia';
import { http } from '@/_services';
import router from '@/_router';

const baseUrl = `/member`;

export const useCommonStore = defineStore({
    id: 'common',
    state: () => ({
    }),
    actions: {
    },
    persist: true,
});
