<template>
  <div class="search">
    <input
      type="text"
      placeholder="search"
      :value="company"
      @input="updateCompany"
    />
    <button type="button" @click="searchCompany">search</button>
    <h3>Active members as of today: {{ members.length }}</h3>
    <div v-if="error" class="error">{{ error }}</div>
    <ul>
      <li v-for="member in members" :key="member.id">
        <NuxtLink :to="`/member/${member.id}`">
          <article class="grid member-container card">
            <div class="image">
              <img :src="member.avatar_url" alt="" loading="lazy" />
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
import { memberService } from "~/services/members";
import type { Member } from "~/types";

const memberListStore = useMemberListStore()

var company: string;
const members = ref<Member[]>([]);
const error = ref<string>("");

loadMembers();

async function loadMembers() {
  const storedItems = memberListStore.allItems;
  if (storedItems.length === 0) {
    const list = await memberService.get();
    memberListStore.setItems(list);
    members.value = list;
  } else {
    members.value = storedItems;
  }
}

function updateCompany(event: any) {
  company = event.target.value;
  memberListStore.setOrg(company);
}

async function searchCompany() {
  try {
    const list = await memberService.getByCompanyName(company);
    if (Array.isArray(list) && list.length === 0) {
      error.value =
        "No se encontraron miembros activos para la empresa especificada.";
    } else {
      error.value = "";
      memberListStore.setItems(list);
      members.value = memberListStore.allItems;
      console.log(members.value);
      
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

<style lang="scss" scoped>
.grid-container {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.nav {
  min-height: 80px;
  background-color: rgb(239, 213, 185);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #889796bc;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px #040f22;
  margin: 1px;
}

.card:hover {
  transform: translateY(-5px);
  border-color: 1 px solid black;
  box-shadow: 0 0 10px #f19f35;
}

.image {
  text-align: center;
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 8px 8px;
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

ul {
  list-style-type: none;
}
</style>
