<template>
   <div class="container mx-auto p-4">
      <!-- create a new post  -->
      <div class="bg-white shadow-sm rounded-lg p-6 mb-4">
         <div class="flex justify-between items-start">
            <div class="flex items-center mb-4">
               <NuxtImg src="/img/avatar.png" alt="User Avatar" class="w-10 h-10 rounded-full mr-4" />
               <div>
                  <h2 class="text-lg font-semibold">Your Name</h2>
                  <p class="text-gray-600 text-sm">October 5, 2023</p>
               </div>
            </div>
            <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">Post</button>
         </div>
         <ClientOnly>
            <QuillEditor ref="post-editor"
               placeholder="What's on your mind?" theme="bubble"
               :toolbar="[['bold', 'italic', 'link'], ['code-block'], ['image', 'video']]"
               class="border border-solid" />

         </ClientOnly>
      </div>
      <BasePost v-for="post in posts" :key="post.id" :post="post" />
   </div>
</template>

<script setup lang="ts">

import { Delta, QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

const postEditor = ref('post-editor');

// const client = useSupabaseClient()
// const { data: postlist } = await useAsyncData('posts', async () => {
//    // RLS is disabled for posts
//   const { data } = await client.from('posts').select()

//   return data
// })
// console.log("posts:", postlist)

// typescript type for post
interface Post {
   id: number;
   user: {
      name: string;
      avatar: '/img/avatar.png'
   };
   date: string;
   content: string;
   media?: string[];
}

const posts: Array<Post> = [
   {
      id: 1,
      user: {
         name: 'John Doe',
         avatar: '/img/avatar.png'
      },
      date: 'October 1, 2023',
      content: 'This is a sample post content with **bold text**, *italic text*, and a [link](https://example.com) 😊. Here is some more content to make this post longer. You can add lists:\n\n- Item 1\n- Item 2\n- Item 3\n\nAnd even some code:\n\n```javascript\nconsole.log("Hello, world!");\n```\n\nEnjoy!'
   },
   {
      id: 2,
      user: {
         name: 'Jane Smith',
         avatar: '/img/avatar.png'
      },
      date: 'October 2, 2023',
      content: 'Another example of a social media post. This one is a bit longer to show variation. You can include quotes:\n\n> This is a blockquote.\n\nAnd more emojis 🎉🚀. Markdown is really versatile!',
      media: ['/img/image.png']
   },
   {
      id: 3,
      user: {
         name: 'Alice Johnson',
         avatar: '/img/avatar.png'
      },
      date: 'October 3, 2023',
      content: 'Short post content. Just a quick update! 👍'
   },
   {
      id: 4,
      user: {
         name: 'Bob Brown',
         avatar: '/img/avatar.png'
      },
      date: 'October 4, 2023',
      content: 'This is a longer post to test the layout. It includes multiple paragraphs and various markdown elements. For example, here is some inline code: `const x = 10;`. Finally, let\'s add some more text to really stretch this out. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This is a blockquote to add more content and test the layout. Keep adding more text to ensure the layout handles long content properly. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. This is a longer post to test the layout. It includes multiple paragraphs and various markdown elements. For example, here is some inline code: `const x = 10;`. Finally, let\'s add some more text to really stretch this out. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This is a blockquote to add more content and test the layout. Keep adding more text to ensure the layout handles long content properly. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
   }
];
</script>

<style scoped>
.container {
   max-width: 600px;
}
</style>