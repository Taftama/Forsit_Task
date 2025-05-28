<template>
  <div class="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-semibold mb-6">Register New Product</h2>
    <form @submit.prevent="submit" class="space-y-4">
      <input v-model="form.name" type="text" placeholder="Name" class="form-input" required />
      <input v-model="form.description" type="text" placeholder="Description" class="form-input" />
      <input v-model="form.price" type="number" placeholder="Price" class="form-input" />
      <input v-model="form.stock" type="number" placeholder="Stock" class="form-input" />
      <input v-model="form.category" type="text" placeholder="Category" class="form-input" />

      <input type="file" @change="onFileChange" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />

      <div v-if="previewUrl" class="mt-4">
        <img :src="previewUrl" alt="Preview" class="w-32 h-32 object-cover rounded" />
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {{ loading ? 'Adding...' : 'Add Product' }}
      </button>
    </form>

    <div v-if="success" class="mt-4 text-green-600 font-semibold">✅ Product added successfully!</div>
    <div v-if="error" class="mt-4 text-red-600 font-semibold">❌ Failed to add product. Please try again.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        description: '',
        price: '',
        stock: '',
        category: ''
      },
      file: null,
      previewUrl: null,
      loading: false,
      success: false,
      error: false
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
      this.previewUrl = URL.createObjectURL(this.file);
    },
    async submit() {
      this.success = false;
      this.error = false;
      this.loading = true;

      try {
        const newProduct = {
          name: this.form.name,
          description: this.form.description,
          price: parseFloat(this.form.price),
          stock: parseInt(this.form.stock),
          category: this.form.category,
          image: this.previewUrl || null
        };

        if (!this.$root.products) this.$root.products = [];
        this.$root.products.push(newProduct);

        this.success = true;
        this.resetForm();
      } catch (err) {
        this.error = true;
        console.error("Error:", err);
      } finally {
        this.loading = false;
      }
    },
    resetForm() {
      this.form = { name: '', description: '', price: '', stock: '', category: '' };
      this.file = null;
      this.previewUrl = null;
    }
  }
};
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300;
}
</style>
