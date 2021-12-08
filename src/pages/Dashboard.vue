<template>
  <div class="max-w-7xl flex h-screen overflow-hidden mx-auto">

    <!-- Content area -->
    <div class="flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />

      <div class="flex">
        <!-- Sidebar -->
        <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
        <main class="flex max-w-7xl w-screen sm:w-11/12">
          <div class="px-4 sm:px-6 lg:pl-20 py-8 w-full">
            <!-- Dashboard actions -->
            <div class="sm:flex sm:justify-between sm:items-center mb-8">
              <!-- Right: Actions -->
              <div class="grid sm:auto-cols-max justify-start sm:justify-end gap-2">
                <!-- Add button -->
                <span class="text-xl font-bold text-at-gray87">
                    Teste Engenheiro de Software Full Stack
                </span>
                <span class="text-sm font-normal text-at-gray54">
                  Desenvolva no padrão MVC. Use e abuse da Orientação a Objetos.
                </span>
              </div>
            </div>
            <!-- Table -->
            <DashboardCard />
          </div>
        </main>
      </div>

    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import DashboardCard from '../partials/dashboard/DashboardCard.vue'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar,
    DashboardCard,
  },
  // setup() {
  //   const sidebarOpen = ref(false)
  //   return {
  //     sidebarOpen,
  //   }  
  // },
  data: () => ({
    sidebarOpen: false,
  }),
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  }
}
</script>