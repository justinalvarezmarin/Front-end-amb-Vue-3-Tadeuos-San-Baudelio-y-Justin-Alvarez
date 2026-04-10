<script setup>
import { ref, computed, onMounted } from 'vue'
import { useConflictStore } from '../stores/conflictStore'
import { useI18n } from 'vue-i18n'
import MainLayout from '../components/MainLayout.vue'
import ConflictCard from '../components/ConflictCard.vue'

const store = useConflictStore()
const { locale } = useI18n()
const search = ref('')

onMounted(() => store.fetchConflicts())

const filtered = computed(() => {
  return store.conflicts.filter(c => c.name.toLowerCase().includes(search.value.toLowerCase()))
})

const activePercent = computed(() => {
  if (store.conflicts.length === 0) return 0
  const active = store.conflicts.filter(c => c.status === 'ACTIVE').length
  return Math.round((active / store.conflicts.length) * 100)
})
</script>

<template>
  <MainLayout>
    <template #header>
      <div class="header-top">
        <h1>{{ $t('title') }}</h1>
        <div class="lang-selector">
          <button @click="locale = 'ca'" :class="{ active: locale === 'ca' }">CA</button>
          <button @click="locale = 'en'" :class="{ active: locale === 'en' }">EN</button>
        </div>
      </div>
      
      <div class="chart-box">
        <p>{{ $t('impact_label') }} {{ activePercent }}%</p>
        <div class="bar-bg">
          <div class="bar-fill" :style="{ width: activePercent + '%' }"></div>
        </div>
      </div>
    </template>

    <input v-model="search" type="text" :placeholder="$t('search_placeholder')" class="search-bar" />

    <div v-if="store.loading" class="loading-text">{{ $t('loading') }}</div>
    <div v-else class="grid">
      <ConflictCard v-for="c in filtered" :key="c.id" :conflict="c" />
    </div>
    <p v-if="filtered.length === 0 && !store.loading" class="no-results">{{ $t('no_results') }}</p>
  </MainLayout>
</template>

<style scoped>
.header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.lang-selector button { background: #eee; border: none; padding: 6px 12px; margin-left: 5px; cursor: pointer; border-radius: 4px; font-weight: bold; transition: 0.3s; }
.lang-selector button.active { background: #42b883; color: white; }

.chart-box { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee; }
.bar-bg { background: #ddd; height: 10px; border-radius: 5px; margin-top: 8px; overflow: hidden; }
.bar-fill { background: #ff4d4d; height: 100%; transition: width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

.search-bar { width: 100%; padding: 12px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; outline: none; }
.search-bar:focus { border-color: #42b883; box-shadow: 0 0 5px rgba(66, 184, 131, 0.2); }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; }
.loading-text, .no-results { text-align: center; font-style: italic; color: #666; margin-top: 20px; }
</style>