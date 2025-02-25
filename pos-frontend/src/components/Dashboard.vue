<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref } from 'vue'

const isSidebarVisible = ref(false)

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

const closeSidebar = () => {
  isSidebarVisible.value = false
}

const showSidebar = () => {
  isSidebarVisible.value = true
}
</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Add hover trigger zone -->
    <div class="fixed left-0 top-0 w-2 h-full z-[55] hover-trigger"
         @mouseenter="showSidebar"></div>
    
    <Sidebar :isVisible="isSidebarVisible" @closeSidebar="closeSidebar" />
    <Header @toggleSidebar="toggleSidebar" />
    <div class="w-full p-4 lg:p-8 pt-28 lg:pt-28">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <div>
          <h1 class="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Welcome Back, Bandi Tharaka!
          </h1>
          <p class="text-gray-400 text-sm">Last login: Today at 15:32</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-200 shadow-lg relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500"></div>
          <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div class="relative z-10 text-emerald-900">
            <h3 class="text-lg font-semibold mb-2 opacity-90">Weekly Earnings</h3>
            <div class="text-3xl font-bold mb-2">Rs. 125,000</div>
            <div class="text-sm font-medium">+4.75% from last week</div>
          </div>
        </div>
        
        <div class="rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-200 shadow-lg relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-400"></div>
          <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div class="relative z-10 text-amber-900">
            <h3 class="text-lg font-semibold mb-2 opacity-90">Total Sales</h3>
            <div class="text-3xl font-bold mb-2">1,250</div>
            <div class="text-sm font-medium">+5.25% from last month</div>
          </div>
        </div>
        
        <div class="rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-200 shadow-lg relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500"></div>
          <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div class="relative z-10 text-pink-900">
            <h3 class="text-lg font-semibold mb-2 opacity-90">Total Customers</h3>
            <div class="text-3xl font-bold mb-2">850</div>
            <div class="text-sm font-medium">+2.85% from last month</div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-gray-800 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 overflow-hidden shadow-xl border border-gray-700/50">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-200">Recent Transactions</h2>
          <button class="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">View All</button>
        </div>
        <div class="min-w-[600px] overflow-x-auto">
          <table class="w-full text-gray-200">
            <thead>
              <tr class="text-left text-gray-300 text-sm">
                <th class="pb-4 font-medium">Product</th>
                <th class="pb-4 font-medium">Date</th>
                <th class="pb-4 font-medium">Method</th>
                <th class="pb-4 font-medium">Amount</th>
                <th class="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors duration-200">
                <td class="py-4 font-bold">Safety Harness</td>
                <td class="text-gray-300">2024/02/19</td>
                <td>
                  <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">Cash</span>
                </td>
                <td class="font-bold">Rs. 20,000.00</td>
                <td><div class="w-2.5 h-2.5 rounded-full bg-green-500"></div></td>
              </tr>
              <tr class="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors duration-200">
                <td class="py-4 font-bold">Safety Boots</td>
                <td class="text-gray-300">2024/02/18</td>
                <td>
                  <span class="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">Card</span>
                </td>
                <td class="font-bold">Rs. 15,500.00</td>
                <td><div class="w-2.5 h-2.5 rounded-full bg-green-500"></div></td>
              </tr>
              <tr class="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors duration-200">
                <td class="py-4 font-bold">Hard Hat</td>
                <td class="text-gray-300">2024/02/18</td>
                <td>
                  <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">Cash</span>
                </td>
                <td class="font-bold">Rs. 8,000.00</td>
                <td><div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div></td>
              </tr>
              <tr class="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors duration-200">
                <td class="py-4 font-bold">Safety Gloves</td>
                <td class="text-gray-300">2024/02/17</td>
                <td>
                  <span class="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">Card</span>
                </td>
                <td class="font-bold">Rs. 5,000.00</td>
                <td><div class="w-2.5 h-2.5 rounded-full bg-red-500"></div></td>
              </tr>
              <tr class="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors duration-200">
                <td class="py-4 font-bold">Safety Glasses</td>
                <td class="text-gray-300">2024/02/17</td>
                <td>
                  <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">Cash</span>
                </td>
                <td class="font-bold">Rs. 3,500.00</td>
                <td><div class="w-2.5 h-2.5 rounded-full bg-green-500"></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded-xl {
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.hover-trigger {
  background: transparent;
}
</style>