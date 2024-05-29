<template>
  <button class="button" type="button" @click="onSearch">Search</button>
</template>

<script lang="ts" setup>
import { type Member } from "@/types";

const props = defineProps<{
  company: string;
}>();

const $emit = defineEmits(["search"]);

</script>
