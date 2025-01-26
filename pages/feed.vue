<template>
   <h1>my feed</h1>
   <BasePost v-for="post in [1,2,4,5]" :key="post" :post="post" />
</template>