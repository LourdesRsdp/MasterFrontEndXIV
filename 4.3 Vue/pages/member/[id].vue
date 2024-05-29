<template>
  <div class="container">
    <NuxtLink to="/" class="back">⬅ Go back</NuxtLink>
    <article v-if="member" class="member-details">
      <div class="image">
        <img :src="member.avatar_url" alt="Member Avatar" />
      </div>
      <div class="content">
        <h1>{{ member.login }}</h1>
        <p v-if="member.email" class="flex">Email: {{ member.email }}</p>
        <p class="flex">URL: <a :href="member.url" target="_blank">{{ member.url }}</a></p>
        <div class="organisation">
          <strong>Organisation:</strong> {{ organisation }}
        </div>
      </div>
    </article>
    <div v-else>
      <p>Member not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMemberListStore } from '~/composables/useMemberListStore.ts';

const route = useRoute();
const id = route.params.id as string;

const memberListStore = useMemberListStore();
const organisation = computed(() => memberListStore.getOrg);
const member = computed(() => memberListStore.allItems.find((x) => x.id == parseInt(id)));
console.log(member.value);
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.back {
  display: block;
  margin: 1rem 0;
  color: #566463;
  text-decoration: none;
  transition: color 0.3s;
}

.back:hover {
  color: #0056b3;
}

.member-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.content {
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.organisation {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>
