<script setup lang="ts">
const route = useRoute()

const postId = ref(route.params.id)
</script>

<template>
    posts: {{ postId }}
</template>