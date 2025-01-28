<script setup lang="ts">
import mdToHtml from '~/utils/mdToHtml';

const props = defineProps < {
    post: {
        id: number
        user: {
            name: string
             avatar: string
        }
        date: string
        content: string
        media?: string[]
    }
} > ();

const postContent = useTemplateRef<HTMLSpanElement>("post-content");
const textTooLong = ref(false);
const postExpaned = ref(false);

onMounted(() => {
    if (postContent.value) {
        textTooLong.value = postContent.value.clientHeight < postContent.value.scrollHeight;
    }
    else {
        // this shouldnt happen
        console.error("postContent is null");
    }
})
</script>

<template>
    <div class="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
        <div class="p-6">
        <div class="flex items-center mb-4">
            <img :src="post.user.avatar" alt="User Avatar" class="w-10 h-10 rounded-full mr-4">
            <div>
                <h2 class="text-lg font-semibold">{{ post.user.name }}</h2>
                <p class="text-gray-600 text-sm">{{ post.date }}</p>
            </div>
        </div>
        <span ref="post-content" class="text-gray-800 overflow-hidden text-ellipsis" :class="postExpaned ? 'line-clamp-none' : 'line-clamp-4'" v-html="mdToHtml(post.content)"></span>
        <a v-if="textTooLong" class="text-blue-500 text-xs" @click="postExpaned = !postExpaned">{{ !postExpaned ? 'Show more' : 'Show less' }}</a>
    </div>
        <div v-if="post.media" class="max-h-60">
            
            <NuxtImg v-for="media in post.media" :key="media" :src="media" :alt="media" class="w-full object-cover object-center" />
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: underline;
    cursor: pointer;
}

ul li {
    list-style-type: disc;
}
ol li {
    list-style-type: decimal;
}
li {
    margin-left: 1em;
}
code {
    background-color: #f4f4f4;
    padding: 0.25em;
    border-radius: 0.25em;
}
</style>