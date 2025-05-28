<template>
  <div class="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-semibold mb-6">Revenue Analysis</h2>

    <!-- Filter by Category -->
    <div class="mb-6">
      <label class="block mb-2 text-gray-700 font-medium">Filter by Category:</label>
      <select v-model="selectedCategory" class="w-full border px-4 py-2 rounded-md">
        <option value="">All</option>
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
    </div>

    <!-- Totals -->
    <div class="flex gap-6 mb-6">
      <div class="p-4 bg-blue-100 text-blue-700 rounded-md w-full text-center">
        <div class="text-sm font-medium">Total Revenue</div>
        <div class="text-xl font-bold">${{ totalRevenue }}</div>
      </div>
      <div class="p-4 bg-green-100 text-green-700 rounded-md w-full text-center">
        <div class="text-sm font-medium">Total Orders</div>
        <div class="text-xl font-bold">{{ totalOrders }}</div>
      </div>
    </div>

    <!-- ApexChart -->
    <apexchart
      width="100%"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="chartSeries"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: { apexchart: VueApexCharts },
  data() {
    return {
      selectedCategory: '',
      salesData: []
    };
  },
  created() {
    this.salesData = this.generateMockSales(120);
  },
  methods: {
    generateMockSales(days = 100) {
      const categories = ['Electronics', 'Home', 'Fitness', 'Fashion', 'Toys'];
      const sales = [];
      const startDate = new Date();

      for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() - i);
        const formattedDate = date.toISOString().split('T')[0];

        const count = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < count; j++) {
          sales.push({
            date: formattedDate,
            category: categories[Math.floor(Math.random() * categories.length)],
            amount: Math.floor(Math.random() * 500 + 50)
          });
        }
      }
      return sales.reverse();
    }
  },
  computed: {
    categories() {
      return [...new Set(this.salesData.map(s => s.category))];
    },
    filteredSales() {
      return this.selectedCategory
        ? this.salesData.filter(s => s.category === this.selectedCategory)
        : this.salesData;
    },
    totalRevenue() {
      return this.filteredSales.reduce((acc, cur) => acc + cur.amount, 0);
    },
    totalOrders() {
      return this.filteredSales.length;
    },
    chartSeries() {
      const totalsByDate = {};
      this.filteredSales.forEach(s => {
        if (!totalsByDate[s.date]) totalsByDate[s.date] = 0;
        totalsByDate[s.date] += s.amount;
      });
      return [{ name: "Revenue", data: Object.values(totalsByDate) }];
    },
    chartOptions() {
      const dates = [...new Set(this.filteredSales.map(s => s.date))].sort();
      return {
        chart: { id: 'revenue-chart' },
        xaxis: { categories: dates },
        title: { text: 'Revenue by Date', align: 'center' },
        dataLabels: { enabled: false },
        colors: ['#3b82f6']
      };
    }
  }
};
</script>

<style scoped>
select {
  @apply border px-4 py-2 rounded-md;
}
</style>
