<template>
  <div :id="id" class="hidden lg:flex justify-end min-w-0 flex-1 md:px-8 lg:px-0">
    <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
      <div class="w-60">
        <label for="search" class="sr-only">Busca</label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input 
            id="search" 
            name="search" 
            class="bg-at-hoversecondary block w-full border border-t border-transparent rounded-md py-2 pl-10 pr-3 text-sm 
            placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 
            focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm" 
            placeholder="Buscar" 
            type="search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, nextTick, watch } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'

export default {
  name: 'Search',
  props: ['id', 'searchId'],
  components: {
    SearchIcon
  },
  // setup(props, { emit }) {
  //   const searchInput = ref(null)
 
  //   return {
  //     searchInput,
  //   }
  // }
}
</script>