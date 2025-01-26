<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const handle = ref(route.params.handle)
</script>

<template>
    <div>
        <h1>User: {{ handle }}</h1>
    </div>
</template>