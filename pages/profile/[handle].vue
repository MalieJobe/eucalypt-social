<script setup lang="ts">
const route = useRoute()

const handle = ref(route.params.handle)
</script>

<template>
    <div>
        <h1>User: {{ handle }}</h1>
    </div>
</template>