<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow mb-6">
      <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-800">Ecommerce Admin</h1>
        <div class="space-x-4">
          <router-link to="/register" class="text-gray-600 hover:text-blue-600 font-medium">Register</router-link>
          <router-link to="/inventory" class="text-gray-600 hover:text-blue-600 font-medium">Inventory</router-link>
          <router-link to="/revenue" class="text-gray-600 hover:text-blue-600 font-medium">Revenue</router-link>
        </div>
      </div>
    </nav>
    <main class="px-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {}
</script>