<template>
  <div class="flex-1">
    <!-- Sidebar backdrop (mobile only) -->
    <div class="inset-0 bg-gray-900 bg-opacity-30 lg:hidden lg:z-auto transition-opacity duration-200" 
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" 
      aria-hidden="true">
    </div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      class="flex flex-col absolute left-0 top-0 lg:left-auto lg:top-auto lg:translate-x-0 
          transform h-[calc(100%-5rem)] no-scrollbar w-44 lg:w-16 lg:sidebar-expanded:!w-44 
          2xl:!w-20 flex-shrink-0 bg-white border-at-border border-r-2 transition-all 
          duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
        <!-- Pages group -->
        <div class="flex-1">
          <ul class="mt-8">
            <!-- Dashboard -->
            <router-link to="/" custom v-slot="{ href, navigate, isExactActive }">
              <li class="h-10 py-2 rounded-br-lg mb-4 lg:sidebar-expanded:mb-5 last:mb-0" 
                :class="isExactActive && 'border-l-4 border-transparent hover:border-l-4 hover:border-at-prymary'"
              >
                <a class="block hover:text-at-prymary truncate transition duration-150 h-9" 
                  :href="href" @click="navigate">
                  <div class="items-center flex flex-col">
                    <Chartbar />
                    <span 
                      class="text-sm flex font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 
                        duration-100">
                      Dashboard
                    </span>
                  </div>
                </a>
              </li>
            </router-link>   
            <router-link to="/" custom v-slot="{ href, navigate, isExactActive }">
              <li class="h-10 py-2 rounded-br-lg mb-4 lg:sidebar-expanded:mb-5 last:mb-0" 
                :class="isExactActive && 'border-l-4 border-transparent hover:border-l-4 hover:border-at-prymary'">
                <a class="block hover:text-at-prymary truncate transition duration-150 h-9" 
                  :href="href" @click="navigate">
                  <div class="items-center flex flex-col">
                    <Flowmagic />
                    <span class="text-sm flex font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 
                      duration-100">
                      Adicionar
                    </span>
                  </div>
                </a>
              </li>
            </router-link>
          </ul>
        </div>

    </div>
  </div>
</template>

<script>
// import { ref, onMounted, onUnmounted, watch } from 'vue'
// import { useRouter } from 'vue-router'
import Chartbar from '../components/icons/Chartbar.vue'
import Flowmagic from '../components/icons/Flowmagic.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    Chartbar,
    Flowmagic
  }
}
</script>