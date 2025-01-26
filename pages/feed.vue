<template>
   <div class="container mx-auto p-4">
      <div v-for="post in posts" :key="post.id" class="bg-white shadow-md rounded-lg p-6 mb-4">
         <div class="flex items-center mb-4">
            <img :src="post.user.avatar" alt="User Avatar" class="w-10 h-10 rounded-full mr-4">
            <div>
               <h2 class="text-lg font-semibold">{{ post.user.name }}</h2>
               <p class="text-gray-600 text-sm">{{ post.date }}</p>
            </div>
         </div>
         <p class="text-gray-800">{{ post.content }}</p>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         posts: [
            {
               id: 1,
               user: {
                  name: 'John Doe',
                  avatar: 'https://via.placeholder.com/150'
               },
               date: 'October 1, 2023',
               content: 'This is a sample post content.'
            },
            {
               id: 2,
               user: {
                  name: 'Jane Smith',
                  avatar: 'https://via.placeholder.com/150'
               },
               date: 'October 2, 2023',
               content: 'Another example of a social media post.'
            }
         ]
      };
   }
};
</script>

<style scoped>
.container {
   max-width: 600px;
}
</style>