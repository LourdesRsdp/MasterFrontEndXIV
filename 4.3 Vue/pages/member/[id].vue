<template>
  <div class="container">
    <NuxtLink to="/" class="back">⬅️ Go back</NuxtLink>
    <article>
      <div>
        <img :src="member?.avatar_url" alt="" />
      </div>
      <div v-if="member">
        <h1>{{ member.login }}</h1>
        
        <p class="flex">{{ member.email }}</p>
        <p class="flex">Url:&nbsp; :url="member.url"</p>
        <div>
          {{ organisation }}
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;

const memberListStore = useMemberListStore();
const organisation = memberListStore.getOrg;
const member = memberListStore.allItems.find((x) => x.id == parseInt(id));
console.log(member);
</script>

<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}
</style>
