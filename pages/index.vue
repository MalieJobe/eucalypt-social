

<template>
    <div class="container mx-auto p-4">
        <header class="text-center mb-8">
            <h1 class="text-5xl font-bold mb-4">Welcome to Eucalypt</h1>
            <p class="text-xl">A Transparent Social Media Platform</p>
        </header>
        
        <section class="mb-8">
            <h2 class="text-4xl font-semibold mb-4">Why Eucalypt?</h2>
            <p class="mb-4">Eucalypt is a fresh take on social media, designed to prioritize accountability, transparency, and factual content. Built with open-source principles, it aims to provide a clean, fair, and bot-free space for meaningful interaction.</p>
        </section>
        
        <section class="mb-8">
            <h2 class="text-4xl font-semibold mb-4">Key Features</h2>
            <ul class="list-disc list-inside mb-4">
                <li class="mb-4">
                    <h3 class="text-2xl font-semibold">Tiered Verification System</h3>
                    <ul class="list-disc list-inside ml-4">
                        <li>Basic Account: Email-only sign-up to like posts.</li>
                        <li>Mid-Level Verification: Add phone or eID to unlock commenting.</li>
                        <li>Full Verification: ID verification for posting, ensuring accountability.</li>
                    </ul>
                </li>
                <li class="mb-4">
                    <h3 class="text-2xl font-semibold">Fact-Checking and Citation System</h3>
                    <ul class="list-disc list-inside ml-4">
                        <li>Posts can include citations.</li>
                        <li>Citations are verified and ranked by the community.</li>
                        <li>Posts with reliable citations rank higher in visibility.</li>
                    </ul>
                </li>
                <li class="mb-4">
                    <h3 class="text-2xl font-semibold">Transparent Algorithm</h3>
                    <ul class="list-disc list-inside ml-4">
                        <li>Open-source ranking system prioritizes well-cited, community-approved content.</li>
                        <li>Regular audits and updates ensure fairness.</li>
                    </ul>
                </li>
            </ul>
        </section>
        
        <section class="text-center mb-8">
            <h2 class="text-4xl font-semibold mb-4">Join Us Today</h2>
            <p class="mb-4">Be part of a community that values truth and transparency. Sign up now and start your journey with Eucalypt.</p>
            <button class="bg-blue-500 text-white px-6 py-2 rounded-full text-xl">Sign Up</button>
        </section>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}
</style>