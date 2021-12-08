<template>
 <Popover as="template" v-slot="{ open }">
      <header :class="[open ? 'fixed inset-0 overflow-y-auto' 
        : '', 'bg-at-secondary shadow-sm lg:static lg:overflow-y-visible']">
        <div class="max-w-7xl px-4 mx-auto h-20">
          <div class="relative flex justify-between lg:gap-8 h-full">
            <div class="flex xl:col-span-2">
              <div class="flex-shrink-0 flex items-center">
                <!-- Menu -->
                <button 
                  @click.prevent="sidebarExpanded = !sidebarExpanded"
                  type="button" 
                  class="mr-5 flex-shrink-0 bg-opacity-80 bg-gray-600 rounded-full p-2 text-white hover:text-at-prymary 
                      focus:outline-none focus:ring-2 focus:bg-at-prymary opacity-0 pointer-events-none 
                      lg:opacity-100 lg:pointer-events-auto">
                  <span class="sr-only">Menu</span>
                  <MenuIconRoit />
                </button>
                <!-- Logo -->
                <a href="#">
                  <img class="block h-7 w-44" src="../assets/logo.svg" alt="logo roit" />
                </a>
              </div>
            </div>
            <!-- Search -->
            <Search />
              <!-- Mobile menu button -->
            <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
            <!-- Icon x (close) -->
              <PopoverButton 
                class="-mx-2 mt-2 rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-200 
              hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                <span class="sr-only">Abrir menu</span>
                 <MenuIconRoit v-if="!open" class="block h-5 w-5" aria-hidden="true"/>
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>

            <!-- Language -->
            <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <a 
                href="#" 
                class="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-100 hover:text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="sr-only">Idioma</span>
                <TranslateIcon class="h-6 w-6" aria-hidden="true" />
              </a>

              <!-- Profile dropdown -->
              <Menu as="div" class="flex-shrink-0 relative ml-5">
                <div>
                  <MenuButton class="bg-white rounded-full flex focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-gray-100">
                    <span class="sr-only">Menu usuário</span>
                    <img class="h-8 w-8 rounded-full object-contain" :src="user.imageUrl" alt="user" />
                  </MenuButton>
                </div>
                <transition 
                  enter-active-class="transition ease-out duration-100" 
                  enter-from-class="transform opacity-0 scale-95" 
                  enter-to-class="transform opacity-100 scale-100" 
                  leave-active-class="transition ease-in duration-75" 
                  leave-from-class="transform opacity-100 scale-100" 
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="flex flex-col text-center origin-top-right absolute z-10 right-0 w-72 h-80 
                          rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none
                          mt-2">
                    <!-- User -->
                    <div class="max-w-3xl mx-auto px-4 flex flex-col items-center mt-7 sm:px-6">
                      <div class="flex-shrink-0 border-8 border-at-border rounded-full p-px">
                        <img class="h-16 w-16 rounded-full object-contain" :src="user.imageUrl" alt="user" />
                      </div>
                      <div class="mt-3">
                        <div class="text-base font-medium text-at-fontsecondary">
                          {{ user.name }}
                        </div>
                        <div class="text-base font-medium text-at-gray33">
                          ROIT
                        </div>
                        <div class="font-display text-sm font-light text-at-gray33">
                          {{ user.email }}
                        </div>
                      </div>
                    </div>
                    <!-- Menu --> 
                    <div class="mt-6">
                      <a href="#" class="w-4/5 block border-2 rounded-lg border-at-border mx-auto px-4 
                        py-1 text-sm font-medium text-at-fontsecondary hover:bg-at-bgtrhover">
                       Gerenciar Perfil
                      </a>
                      <a href="#" class="mt-4 w-1/2 block border-2 rounded-lg border-at-border mx-auto 
                        px-4 py-1 text-sm font-medium text-at-prymary hover:bg-at-bgtrhover">
                      Sair
                      </a>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>

            </div>
          </div>
        </div>

        <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
          <div class="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
            <a 
              v-for="item in navigation" 
              :key="item.name" 
              :href="item.href" 
              :aria-current="item.current ? 'page' : undefined" 
              :class="[item.current 
              ? 'bg-gray-100 text-gray-300' 
              : 'hover:bg-at-bgtrhover', 
                'block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:text-gray-900']">
              {{ item.name }}
            </a>
          </div>
          <div class="border-t border-gray-200 pt-4">
          <!-- User menu -->
            <div class="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
              <div class="flex-shrink-0">
                <img class="h-14 w-14 rounded-full object-fill" :src="user.imageUrl" alt="user" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-100">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-100">{{ user.email }}</div>
              </div>
            </div>
            <div class="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
              <!-- Language -->
              <button 
                type="button" 
                class="flex ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="sr-only">Idioma</span>
                <TranslateIcon class="h-6 w-6" aria-hidden="true" />
              </button>
              <a 
                href="#" 
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:text-gray-900 
                  hover:bg-at-bgtrhover">
                Gerenciar Perfil
              </a>
              <a 
                href="#" 
                class="block rounded-md border-2 border-at-secondary border-rounded py-2 px-3 text-base 
                  font-medium text-at-prymary hover:bg-at-bgtrhover">
               Sair
              </a>
            </div>
          </div>

          <div class="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
            <a 
              href="#" 
              class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base 
              font-semibold rounded-md shadow-sm text-white bg-at-prymary hover:bg-gray-600">
              Cadastrar
            </a>
          </div>
        </PopoverPanel>
      </header>
    </Popover>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Menu, MenuButton, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import MenuIconRoit from '../components/icons/Menu.vue'
import Search from '../components/Search.vue'
import { TranslateIcon, FireIcon, HomeIcon, TrendingUpIcon, UserGroupIcon, XIcon, MenuIcon } from '@heroicons/vue/outline'

const user = {
  name: 'Rodolfo Wolff',
  email: 'rodolfoluizwolff@gmail.com',
  imageUrl:
    'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
}
const navigation = [
  { name: 'Dashboar', href: '#', icon: HomeIcon, current: false },
  { name: 'Adicionar', href: '#', icon: FireIcon, current: false },
]

export default {
  name: 'Header',
  props: ['sidebarOpen'],
  components: {
    MenuIconRoit,
    Menu,
    MenuButton,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    TranslateIcon,
    MenuIcon,
    XIcon,
    Search
  },

  setup(props, { emit }) {
    const trigger = ref(null)
    const sidebar = ref(null)
    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(storedSidebarExpanded === null 
      ? false 
      : storedSidebarExpanded === 'true'
    )
    const currentRoute = useRouter().currentRoute.value
    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      ) return
      emit('close-sidebar')
    }
    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    } 
    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })
    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })
    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
      user,
      navigation
    }
  }
}
</script>
