<script setup>
import Button from './ui/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSignup = () => {
  router.push({ name: 'signup' })
}

const handleLogin = (event) => {
  event.preventDefault()
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center" style="background-color: #242424;">
    <div class="grid lg:grid-cols-2 w-full h-screen">
      <!-- Left side - Welcome message -->
      <div class="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden h-screen" style="background-color: #050A24;">
        <div class="relative z-10 flex flex-col">
          <div>
            <h1 class="text-3xl font-bold text-white mb-8">Hardware POS System</h1>
            <img 
              src="@/assets/sign-page img.jpg" 
              alt="POS System"
              class="w-full h-[32rem] object-cover rounded-lg mb-12"
            />
            <div class="space-y-4">
              <h2 class="text-5xl font-bold text-white tracking-tight">
                Welcome.
              </h2>
              <p class="text-3xl font-light text-blue-300 leading-relaxed">
                Start your journey now with our
                <span class="font-medium text-blue-200">management system!</span>
              </p>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      </div>

      <!-- Right side - Login form -->
      <div class="flex items-center justify-center w-full px-8 relative overflow-hidden">
        <!-- Decorative Circles -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        <!-- Login Form Container -->
        <div class="w-full max-w-md rounded-2xl overflow-hidden relative z-10" style="background-color: #131316;">
          <div class="p-8">
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-white mb-2">Login to your account</h2>
              <p class="text-gray-400">Please enter your credentials to continue</p>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div class="relative">
                  <input
                    id="password"
                    type="password"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    class="h-4 w-4 rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
                  />
                  <label for="remember" class="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <a 
                  href="#" 
                  class="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                class="w-full"
              >
                Sign in
              </Button>
            </form>

            <p class="mt-6 text-center text-sm text-gray-400">
              Don't have an account?
              <a 
                @click.prevent="handleSignup" 
                href="#" 
                class="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blur-3xl {
  --tw-blur: blur(64px);
  filter: var(--tw-blur);
}
</style>