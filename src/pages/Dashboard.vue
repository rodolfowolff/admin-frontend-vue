<template>
  <div class="max-w-7xl flex h-screen overflow-hidden mx-auto">

    <!-- Content area -->
    <div class="flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header />

      <div class="flex">
        <!-- Sidebar -->
        <Sidebar />
        <main class="flex max-w-7xl w-full">
          <div class="lg:pl-24 lg:sidebar-expanded:ml-28 p-6 py-8 w-full">
            <div class="sm:flex sm:justify-between sm:items-center mb-8">
              <div class="grid sm:auto-cols-max justify-start sm:justify-end gap-2">
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
  data: () => ({
    sidebarOpen: false,
  }),
  methods: {
    toggleSidebar(evt) {
      evt.preventDefault()
      this.sidebarOpen = !this.sidebarOpen;
    },
  }
}
</script>