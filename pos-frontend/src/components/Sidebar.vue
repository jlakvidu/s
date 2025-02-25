<script setup>
import { HomeIcon, ShoppingCartIcon, UserGroupIcon, UsersIcon, ClipboardDocumentListIcon, ArchiveBoxIcon, ArrowRightOnRectangleIcon, XMarkIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['closeSidebar'])

const menuItems = [
  { name: 'Home', icon: HomeIcon, route: '/dashboard' }, // Changed route from '/' to '/dashboard'
  { name: 'Sales Dashboard', icon: ChartBarIcon, route: '/sales-dashboard' },
  { name: 'Products', icon: ShoppingCartIcon, route: '/products' },
  { name: 'Suppliers', icon: UserGroupIcon, route: '/suppliers' },
  { name: 'Customers', icon: UsersIcon, route: '/customers' },
  { name: 'Employees', icon: UsersIcon, route: '/employees' },
  { name: 'Place Order', icon: ClipboardDocumentListIcon, route: '/place-order' },
  { name: 'Order List', icon: ClipboardDocumentListIcon, route: '/order-list' },
  { name: 'Low Stocks', icon: ArchiveBoxIcon, route: '/low-stocks' },
]

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const navigateTo = (route) => {
  router.push(route)
  emit('closeSidebar')
}
</script>

<template>
  <div class="fixed top-0 left-0 h-full transform transition-transform duration-300 ease-in-out z-[60]"
       :class="[isVisible ? 'translate-x-0' : '-translate-x-full']"
       @mouseleave="emit('closeSidebar')">
    <div class="w-64 h-full bg-gray-800/80 backdrop-blur-md p-4 flex flex-col shadow-2xl border-r border-gray-700/50">
      <div class="flex items-center justify-between mb-8">
        <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Hardware POS
        </span>
        <button @click="emit('closeSidebar')" class="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
      
      <div class="space-y-1.5 flex-grow">
        <div v-for="item in menuItems" :key="item.name"
             class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 group"
             :class="{ 
               'bg-blue-500/10 text-blue-400': $route.path === item.route,
               'hover:bg-gray-700/50 text-gray-300 hover:text-white': $route.path !== item.route
             }"
             @click="navigateTo(item.route)">
          <component :is="item.icon" 
                     class="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
          <span class="font-medium">{{ item.name }}</span>
        </div>
      </div>

      <div class="mt-auto pt-4 border-t border-gray-700/50">
        <div class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200
                    text-red-400 hover:bg-red-400/10 group">
          <ArrowRightOnRectangleIcon class="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
          <span class="font-medium">Log out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur);
  backdrop-filter: var(--tw-backdrop-blur);
}
</style>
