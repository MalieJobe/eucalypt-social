<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const error = ref(null)

const handleLogin = async () => {
    error.value = null
    const { user, error: loginError } = await useSupabaseClient().auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    if (loginError) {
        error.value = loginError.message
    } else {
        navigateTo('/')
    }
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>