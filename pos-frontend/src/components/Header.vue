<script setup>
import { ref } from 'vue'
import { 
  XMarkIcon, 
  BellIcon, 
  ChatBubbleLeftRightIcon, 
  UserIcon,
  ArrowRightOnRectangleIcon,
  PencilIcon,
  CheckIcon
} from '@heroicons/vue/24/outline'

const showProfilePopup = ref(false)
const showNotifications = ref(false)

const userProfile = ref({
    name: 'Bandi Tharaka',
    email: 'bandi@example.com',
    role: 'Administrator',
    location: 'Colombo, Sri Lanka',
    phone: '+94 123 456 789',
    status: 'Active'
})

const notifications = ref([
    { id: 1, title: 'New Hardware Request', message: 'John Doe requested new laptop', time: '5 min ago', read: false },
    { id: 2, title: 'Maintenance Alert', message: 'Server maintenance scheduled', time: '1 hour ago', read: false },
    { id: 3, title: 'System Update', message: 'New system update available', time: '2 hours ago', read: true }
])

const toggleProfile = () => {
    showProfilePopup.value = !showProfilePopup.value
}

const toggleNotifications = () => {
    showNotifications.value = !showNotifications.value
}

const markAsRead = (id) => {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
        notification.read = true
    }
}

const deleteNotification = (id) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
}

const isEditing = ref(false)
const activeTab = ref('profile')
const editedProfile = ref({ ...userProfile.value })

const startEditing = () => {
    editedProfile.value = { ...userProfile.value }
    isEditing.value = true
}

const saveChanges = () => {
    userProfile.value = { ...editedProfile.value }
    isEditing.value = false
}

const cancelEditing = () => {
    editedProfile.value = { ...userProfile.value }
    isEditing.value = false
}
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div class="max-w-[2000px] mx-auto px-6">
            <div class="flex justify-between items-center h-20">
                <!-- Updated Title -->
                <h1 class="text-2xl font-bold text-white tracking-tight">
                    Hardware
                    <span class="text-blue-400 font-extrabold">Management</span>
                </h1>

                <div class="flex items-center space-x-8">
                    <!-- Updated Notification Icon -->
                    <div class="relative notifications-container">
                        <button @click="toggleNotifications"
                            class="p-2.5 rounded-lg hover:bg-gray-800/80 transition-colors duration-200 relative">
                            <BellIcon class="w-6 h-6 text-gray-100" />
                            <span v-if="notifications.filter(n => !n.read).length > 0"
                                class="absolute -top-1.5 -right-1.5 bg-blue-500 text-xs font-semibold text-white w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-gray-900">
                                {{ notifications.filter(n => !n.read).length }}
                            </span>
                        </button>

                        <!-- Updated Notifications Popup -->
                        <div v-if="showNotifications"
                            class="absolute right-0 top-14 w-96 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                            <div class="p-4 border-b border-gray-700 flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900">
                                <div class="flex items-center gap-3">
                                    <BellIcon class="w-5 h-5 text-blue-400" />
                                    <h3 class="font-bold text-white">Notifications</h3>
                                    <span class="px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full">
                                        {{ notifications.length }}
                                    </span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                        Mark all as read
                                    </button>
                                    <button @click="toggleNotifications" class="p-1 hover:bg-gray-700 rounded-lg">
                                        <XMarkIcon class="w-5 h-5 text-gray-400 hover:text-white" />
                                    </button>
                                </div>
                            </div>

                            <!-- Updated Notification Items -->
                            <div class="max-h-[400px] overflow-y-auto">
                                <div v-for="notification in notifications" :key="notification.id"
                                    class="group p-4 border-b border-gray-700/50 hover:bg-gray-800/80 transition-all duration-200"
                                    :class="{ 'bg-gray-800/50': !notification.read }">
                                    <!-- ...existing notification item structure... -->
                                    <div class="flex items-start gap-4">
                                        <div class="w-2 h-2 mt-2 rounded-full flex-shrink-0"
                                            :class="notification.read ? 'bg-gray-500' : 'bg-blue-400'">
                                        </div>
                                        <div class="flex-1">
                                            <h4 class="font-semibold text-white mb-1">{{ notification.title }}</h4>
                                            <p class="text-sm text-gray-300">{{ notification.message }}</p>
                                            <span class="text-xs text-gray-400 mt-2 block">{{ notification.time }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Updated Profile Section -->
                    <div class="flex items-center relative profile-container">
                        <div class="mr-3">
                            <p class="text-sm font-medium text-white">{{ userProfile.name }}</p>
                            <p class="text-xs text-gray-400">{{ userProfile.role }}</p>
                        </div>
                        <button @click="toggleProfile"
                            class="relative flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-gray-700 hover:ring-blue-500 transition-all duration-200">
                            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" alt="avatar"
                                class="w-9 h-9 rounded-full">
                            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-900"></span>
                        </button>

                        <!-- Enhanced Profile Popup -->
                        <div v-if="showProfilePopup"
                            class="absolute right-0 top-14 w-[420px] bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700 divide-y divide-gray-700">
                            <!-- Profile Header -->
                            <div class="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                                <div class="flex items-start justify-between">
                                    <div class="flex items-start gap-4">
                                        <div class="relative">
                                            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" alt="avatar"
                                                class="w-20 h-20 rounded-xl ring-2 ring-blue-500/50 shadow-xl">
                                            <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-gray-900"></span>
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex items-start justify-between">
                                                <div>
                                                    <h3 class="text-xl font-bold text-white">{{ userProfile.name }}</h3>
                                                    <p class="text-sm text-gray-300">{{ userProfile.email }}</p>
                                                </div>
                                                <button v-if="!isEditing" @click="startEditing"
                                                    class="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all">
                                                    <PencilIcon class="w-5 h-5" />
                                                </button>
                                            </div>
                                            <div class="flex gap-2 mt-3">
                                                <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300">
                                                    {{ userProfile.role }}
                                                </span>
                                                <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-300">
                                                    {{ userProfile.status }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="toggleProfile" class="p-1 hover:bg-gray-700 rounded-lg">
                                        <XMarkIcon class="w-5 h-5 text-gray-400 hover:text-white" />
                                    </button>
                                </div>
                            </div>

                            <!-- Profile Navigation -->
                            <div class="flex border-b border-gray-700">
                                <button v-for="tab in ['profile', 'settings', 'activity']" :key="tab"
                                    @click="activeTab = tab"
                                    class="flex-1 px-4 py-3 text-sm font-medium transition-colors"
                                    :class="activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'">
                                    {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
                                </button>
                            </div>

                            <!-- Profile Content -->
                            <div class="p-6 space-y-6">
                                <!-- Profile Information -->
                                <div v-if="activeTab === 'profile'" class="space-y-4">
                                    <div v-if="!isEditing" class="grid grid-cols-2 gap-6">
                                        <div v-for="(value, key) in userProfile" :key="key"
                                            class="space-y-1">
                                            <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">{{ key }}</p>
                                            <p class="text-sm text-white">{{ value }}</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Edit Form -->
                                    <div v-else class="space-y-4">
                                        <div v-for="(value, key) in editedProfile" :key="key" class="space-y-2">
                                            <label class="text-xs font-medium text-gray-400 uppercase tracking-wider">{{ key }}</label>
                                            <input 
                                                v-model="editedProfile[key]"
                                                type="text"
                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                            >
                                        </div>
                                    </div>
                                </div>

                                <!-- Quick Actions -->
                                <div class="flex gap-3 pt-4 border-t border-gray-700">
                                    <template v-if="isEditing">
                                        <button @click="saveChanges"
                                            class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                                            <CheckIcon class="w-4 h-4" />
                                            <span>Save Changes</span>
                                        </button>
                                        <button @click="cancelEditing"
                                            class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors">
                                            <XMarkIcon class="w-4 h-4" />
                                            <span>Cancel</span>
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                                            <ChatBubbleLeftRightIcon class="w-4 h-4" />
                                            <span>Message</span>
                                        </button>
                                        <button class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                                            <UserIcon class="w-4 h-4" />
                                            <span>View Full Profile</span>
                                        </button>
                                    </template>
                                </div>

                                <!-- Sign Out Button -->
                                <button class="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                                    <ArrowRightOnRectangleIcon class="w-4 h-4" />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.notifications-container .max-h\[400px\] {
    scrollbar-width: thin;
    scrollbar-color: #4B5563 #1F2937;
}

.notifications-container .max-h\[400px\]::-webkit-scrollbar {
    width: 4px;
}

.notifications-container .max-h\[400px\]::-webkit-scrollbar-track {
    background: #1F2937;
}

.notifications-container [class*="max-h-[400px]"]::-webkit-scrollbar-thumb {
    background-color: #4B5563;
    border-radius: 2px;
}
</style>
