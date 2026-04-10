<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useConflictStore } from '../stores/conflictStore'
import MainLayout from '../components/MainLayout.vue'

const route = useRoute()
const router = useRouter()
const store = useConflictStore()

onMounted(async () => {
  if (store.conflicts.length === 0) await store.fetchConflicts()
})

const conflict = computed(() => store.conflicts.find(c => c.id == route.params.id))

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <MainLayout>
    <template #header>
      <button @click="router.push('/')" class="btn-back">⬅ Tornar</button>
      <h1 v-if="conflict">{{ conflict.name }}</h1>
    </template>

    <div v-if="conflict" class="detail-content">
      <div class="badge">{{ conflict.status }}</div>
      <p class="big-desc">{{ conflict.description }}</p>
      <hr />
      <p>Data d'inici: <strong>{{ formatDate(conflict.startDate) }}</strong></p>
    </div>
  </MainLayout>
</template>

<style scoped>
.btn-back { padding: 8px 15px; cursor: pointer; border: none; border-radius: 5px; margin-bottom: 20px; }
.detail-content { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.badge { background: #42b883; color: white; display: inline-block; padding: 5px 15px; border-radius: 20px; font-weight: bold; margin-bottom: 20px; }
.big-desc { font-size: 1.2em; line-height: 1.6; }
</style>