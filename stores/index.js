import { defineStore } from 'pinia'

export const useStore = defineStore('translation', {
  state: () => ({
    stories: [],
    notification: {
      show: false,
      status: '',
      title: '',
      description: ''
    }
  }),
  getters: {},
  actions: {}
})
