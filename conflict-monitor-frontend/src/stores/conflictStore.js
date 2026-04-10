import { defineStore } from 'pinia'
import ConflictService from '../services/ConflictService.js'

export const useConflictStore = defineStore('conflict', {
  state: () => ({
    conflicts: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchConflicts() {
      this.loading = true
      this.error = null
      try {
        this.conflicts = await ConflictService.getAll()
      } catch (err) {
        this.error = "Error de connexió: Assegura't que el Backend d'IntelliJ està actiu."
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})