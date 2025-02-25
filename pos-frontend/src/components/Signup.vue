<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from './ui/Button.vue'

const loading = ref(false)
const error = ref('')
const credentials = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})
const showPassword = ref(false)
const passwordsMatch = ref(true)
const socialAuthLoading = ref(false)
const socialAuthError = ref('')

const router = useRouter()

// Check if passwords match
const validatePasswords = () => {
  if (credentials.value.password && credentials.value.confirmPassword) {
    passwordsMatch.value = credentials.value.password === credentials.value.confirmPassword
  } else {
    passwordsMatch.value = true
  }
}

const handleSignUp = async () => {
  if (!passwordsMatch.value) return
  
  try {
    loading.value = true
    error.value = ''
    // Implement your sign up logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    console.log('Sign up successful', credentials.value)
  } catch (err) {
    error.value = err.message || 'Failed to create account'
  } finally {
    loading.value = false
  }
}

// Google Sign In
const handleGoogleSignIn = async () => {
  try {
    socialAuthLoading.value = true
    socialAuthError.value = ''
    // Implement your Google sign in logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    console.log('Google sign in initiated')
  } catch (err) {
    socialAuthError.value = err.message || 'Failed to sign in with Google'
  } finally {
    socialAuthLoading.value = false
  }
}

// Facebook Sign In
const handleFacebookSignIn = async () => {
  try {
    socialAuthLoading.value = true
    socialAuthError.value = ''
    // Implement your Facebook sign in logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    console.log('Facebook sign in initiated')
  } catch (err) {
    socialAuthError.value = err.message || 'Failed to sign in with Facebook'
  } finally {
    socialAuthLoading.value = false
  }
}

const navigateToLogin = () => {
  router.push({ name: 'signin' })
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
                Join us today.
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

      <!-- Right side - Sign up form -->
      <div class="flex items-center justify-center w-full px-8 relative overflow-hidden">
        <!-- Decorative Circles -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        <!-- Sign Up Form Container -->
        <div class="w-full max-w-md rounded-2xl overflow-hidden relative z-10" style="background-color: #131316;">
          <div class="p-8">
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-white mb-2">Create your account</h2>
              <p class="text-gray-400">Sign up to get started with our POS system</p>
            </div>

            <!-- Social Login Buttons -->
            <div class="space-y-4 mb-6">
              <!-- Error Alert for Social Auth -->
              <div v-if="socialAuthError" class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                {{ socialAuthError }}
              </div>
              
              <button 
                @click="handleGoogleSignIn" 
                :disabled="loading || socialAuthLoading"
                class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 text-gray-800 font-medium transition-colors border border-gray-200"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Sign up with Google</span>
              </button>
              
              <button 
                @click="handleFacebookSignIn" 
                :disabled="loading || socialAuthLoading"
                class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
                <span>Sign up with Facebook</span>
              </button>
            </div>

            <div class="relative flex items-center justify-center mb-6">
              <div class="border-t border-gray-700 flex-grow"></div>
              <span class="mx-4 text-sm text-gray-400">or sign up with email</span>
              <div class="border-t border-gray-700 flex-grow"></div>
            </div>

            <form @submit.prevent="handleSignUp" class="space-y-6">
              <!-- Error Alert -->
              <div v-if="error" class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                {{ error }}
              </div>

              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  v-model="credentials.name"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your full name"
                  :disabled="loading"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  v-model="credentials.email"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  :disabled="loading"
                />
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div class="relative">
                  <input
                    id="password"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="credentials.password"
                    required
                    @input="validatePasswords"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Create a password"
                    :disabled="loading"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    :disabled="loading"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      :class="{ 'hidden': showPassword }"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      :class="{ 'hidden': !showPassword }"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div class="relative">
                  <input
                    id="confirmPassword"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="credentials.confirmPassword"
                    required
                    @input="validatePasswords"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 border"
                    :class="[
                      passwordsMatch ? 'border-gray-700' : 'border-red-500',
                      passwordsMatch ? 'focus:border-blue-500' : 'focus:border-red-500'
                    ]"
                    placeholder="Confirm your password"
                    :disabled="loading"
                  />
                  <div v-if="!passwordsMatch && credentials.confirmPassword" class="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  v-model="credentials.agreeToTerms"
                  required
                  class="h-4 w-4 rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500"
                  :disabled="loading"
                />
                <label for="agreeToTerms" class="ml-2 block text-sm text-gray-300">
                  I agree to the <a href="#" class="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="#" class="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ loading ? 'Creating Account...' : 'Create Account' }}
              </button>
            </form>

            <p class="mt-6 text-center text-sm text-gray-400">
              Already have an account?
              <a 
                @click.prevent="navigateToLogin" 
                href="#" 
                class="text-blue-400 hover:text-blue-300 font-medium cursor-pointer">
                Sign in
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