<template>
  <div class="container">
    <div class="search-container">
      <input
        type="text"
        placeholder="Search for collectives"
        v-model="company"
        class="search-input"
      />
      <button type="button" @click="searchCompany" class="search-button">Search</button>
      <h3 class="member-count">Active members as of today: {{ members.length }}</h3>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <ul>
      <li v-for="member in members" :key="member.id">
        <NuxtLink :to="`/member/${member.id}`">
          <article class="grid member-container card">
            <div class="image">
              <img :src="member.avatar_url" alt="Member Avatar" loading="lazy" />
            </div>
            <div class="member-container__content">
              <h2>{{ member.login }}</h2>
            </div>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { memberService } from "~/services/members";
import type { Member } from "~/types";
import { useMemberListStore } from '~/composables/useMemberListStore.ts';
import Header from '~/components/Header.vue';

const memberListStore = useMemberListStore();
const company = ref<string>('Lemoncode'); 
const members = ref<Member[]>([]);
const error = ref<string>("");

const organisation = computed(() => memberListStore.getOrg());

onMounted(() => {
  loadMembers();
});

async function loadMembers() {
  try {
    const list = await memberService.getByCompanyName(company.value);
    memberListStore.setItems(list);
    members.value = list;
  } catch (err) {
    console.error("Error loading members:", err);
    error.value = "Error loading members";
  }
}

function updateCompany(event: any) {
  company.value = event.target.value;
  memberListStore.setOrg(company.value);
}

async function searchCompany() {
  try {
    const list = await memberService.getByCompanyName(company.value);
    if (Array.isArray(list) && list.length === 0) {
      error.value = "No se encontraron miembros activos para la empresa especificada.";
    } else {
      error.value = "";
      memberListStore.setItems(list);
      members.value = memberListStore.allItems;
    }
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      error.value = "No se encontró la empresa especificada.";
    } else {
      error.value = "Se produjo un error al buscar los miembros.";
    }
    memberListStore.setItems([]);
    members.value = memberListStore.allItems;
  }
}
</script>



<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #65727a;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #f19f35;
}

.member-count {
  margin: 0;
  font-size: 1rem;
}

.error {
  color: red;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

.grid-container {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background-color: #889796bc;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px #040f22;
  margin: 1px;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 10px #f19f35;
}

.image {
  text-align: center;
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  filter: grayscale(100%);
}

.member-container__content {
  padding: 20px;
}

.member-container__content h2 {
  margin: 0;
  font-size: 20px;
  color: #000;
}
</style>

