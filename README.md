# Forsit_Task# E-commerce Admin Dashboard

A responsive, single-page Vue.js application that helps E-commerce managers visualize and manage revenue, inventory, and product data. Built using Vue 3 + Tailwind CSS.

## Live Demo

👉 lambent-treacle-a63d09.netlify.app

## 📦 Features

### 1. Revenue Analysis
- Displays total revenue and orders
- Filter sales by product category
- Interactive ApexCharts to visualize daily revenue

### 2. Inventory Management
- Dynamic table of products with stock levels
- Sort and search by name or category
- Low stock highlighted (red background)
- Inline stock updates

### 3. Product Registration
- Add new products via form with image upload preview
- Newly added products appear in the Inventory immediately

## 🛠 Tech Stack
- **Vue 3** (Composition API)
- **Tailwind CSS** for styling
- **Vue-ApexCharts** for visualizations
- **LocalStorage** for persistent mock data (no backend required)

## Project Structure

📦ecommerce-frontend
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜main.css
 ┃ ┣ 📂router
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂views
 ┃ ┃ ┣ 📜InventoryPage.vue
 ┃ ┃ ┣ 📜RegisterPage.vue
 ┃ ┃ ┗ 📜RevenuePage.vue
 ┃ ┣ 📜App.vue
 ┃ ┗ 📜main.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┗ 📜vite.config.js


## Setup Instructions

```bash
# 1. Clone this repository
git clone https://github.com/Taftama/Forsit_Task.git
cd ecommerce-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev