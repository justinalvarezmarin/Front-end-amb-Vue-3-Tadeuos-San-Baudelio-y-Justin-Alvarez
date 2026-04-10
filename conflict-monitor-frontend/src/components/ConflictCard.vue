<script setup>
const props = defineProps(['conflict'])

const getStatusColor = (status) => {
  if (status === 'ACTIVE') return '#ff4d4d' // Rojo
  if (status === 'FROZEN') return '#4da6ff' // Azul
  return '#999' // Gris por defecto
}
</script>

<template>
  <div class="card" :style="{ borderTop: '6px solid ' + getStatusColor(conflict.status) }">
    <div class="card-header">
      <img 
        v-if="conflict.countryCode" 
        :src="`https://flagcdn.com/w40/${conflict.countryCode.toLowerCase()}.png`" 
        class="flag-img"
      />
      <h3>{{ conflict.name }}</h3>
    </div>

    <p class="description">{{ conflict.description.substring(0, 100) }}...</p>

    <div class="card-footer">
      <router-link :to="'/conflicts/' + conflict.id" class="link-more">
        {{ $t('btn_details') }}
      </router-link>
      <button class="btn-archive">{{ $t('btn_archive') }}</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-5px); }

.card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.flag-img { width: 30px; height: auto; border-radius: 3px; border: 1px solid #eee; }

.description { color: #555; font-size: 0.95rem; line-height: 1.4; flex-grow: 1; }

.card-footer { margin-top: 20px; display: flex; justify-content: space-between; align-items: center; }
.link-more { color: #42b883; text-decoration: none; font-weight: 700; font-size: 0.9rem; }
.link-more:hover { text-decoration: underline; }

.btn-archive { 
  background: #f4f4f4; 
  border: none; 
  padding: 6px 12px; 
  border-radius: 6px; 
  cursor: pointer; 
  font-size: 0.8rem;
  color: #777;
}
.btn-archive:hover { background: #e0e0e0; }
</style>