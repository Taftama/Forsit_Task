<template>
  <div class="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-semibold mb-6">Inventory Management</h2>

    <!-- Search and Sort Controls -->
    <div class="flex flex-wrap gap-4 mb-4">
      <input v-model="search" type="text" placeholder="Search by name or category" class="flex-1 border px-4 py-2 rounded-md" />
      <select v-model="sortKey" class="border px-3 py-2 rounded-md">
        <option disabled value="">Sort By</option>
        <option value="name">Name</option>
        <option value="stock">Stock</option>
      </select>
      <select v-model="sortOrder" class="border px-3 py-2 rounded-md">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>

    <table class="min-w-full border text-sm text-center">
      <thead class="bg-gray-100 text-gray-600">
        <tr>
          <th class="border px-4 py-2">Image</th>
          <th class="border px-4 py-2">Name</th>
          <th class="border px-4 py-2">Category</th>
          <th class="border px-4 py-2">Stock</th>
          <th class="border px-4 py-2">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredAndSortedInventory"
          :key="item.name"
          :class="{ 'bg-red-100': item.stock < 5 }"
        >
          <td class="border px-4 py-2">
            <img
              v-if="item.image"
              :src="item.image"
              alt="product"
              class="w-12 h-12 object-cover rounded mx-auto"
            />
            <span v-else class="text-gray-400 italic">No Image</span>
          </td>
          <td class="border px-4 py-2">{{ item.name }}</td>
          <td class="border px-4 py-2">{{ item.category }}</td>
          <td class="border px-4 py-2">{{ item.stock }}</td>
          <td class="border px-4 py-2">
            <input v-model.number="item.stock" type="number" class="w-20 border px-2 py-1" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: [
        {
          name: "Wireless Mouse",
          category: "Electronics",
          stock: 12,
          image: null
        },
        {
          name: "Yoga Mat",
          category: "Fitness",
          stock: 3,
          image: null
        },
        {
          name: "Desk Lamp",
          category: "Home",
          stock: 8,
          image: null
        }
      ],
      search: '',
      sortKey: '',
      sortOrder: 'asc'
    };
  },
  created() {
    if (this.$root.products && this.$root.products.length > 0) {
      this.inventory.push(...this.$root.products);
    }
  },
  computed: {
    filteredAndSortedInventory() {
      let result = this.inventory.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.category.toLowerCase().includes(this.search.toLowerCase())
        );
      });
      if (this.sortKey) {
        result = result.sort((a, b) => {
          const valA = a[this.sortKey];
          const valB = b[this.sortKey];
          if (this.sortOrder === 'asc') return valA > valB ? 1 : -1;
          else return valA < valB ? 1 : -1;
        });
      }
      return result;
    }
  }
};
</script>
