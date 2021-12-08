<template>
  <!-- Loader -->
  <div v-if="loading" class="border border-gray-300 shadow rounded-md p-4 max-w-7xl mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-gray-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-400 rounded"></div>
          <div class="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Table Header -->
  <div v-if="!loading" class="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
    <div class="overflow-x-auto">
      <header class="flex items-center px-4 py-2">
        <button class="h-10 w-28 rounded-md text-sm font-semibold
                      text-white bg-at-prymary shadow-md">
          <span>Cadastrar</span>
        </button>
        <SearchTable />
      </header>
      <div class="pb-10 align-middle inline-block min-w-full sm:px-4">

        <!-- Table -->
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-at-hoverheadertable">
              <tr>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54">
                  Nome
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54">
                  Idade
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54">
                  GitHub User
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54">
                  Endereço
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Ver</span>
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Deletar</span>
                </th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200">
              <div v-if="!users.length">
                <p class="text-at-gray87 text-base font-bold p-2 leading-relaxed font-display">
                 Sem usuários cadastrados.
                </p>
              </div>
              <tr v-for="user in users" :key="user._id" class="hover:bg-at-bgtrhover">
                <td class="px-6 py-4 font-display whitespace-nowrap text-xs text-at-gray87">
                  {{ user.cod }}
                </td>
                <td class="px-6 py-4 font-display whitespace-nowrap text-xs text-at-gray87">
                  {{ user.username }}
                </td>
                <td class="px-6 py-4 font-display whitespace-nowrap text-xs text-at-gray87">
                  {{ getAge(user.dateofbirth) }}
                </td>
                <td class="px-6 py-4 font-display whitespace-nowrap text-xs text-at-gray87">
                  {{ user.githubusername }}
                </td>
                <td class="px-6 py-4 font-display whitespace-nowrap text-xs text-at-gray87">
                  {{ user.address }}
                </td>
                <!-- Button Look User -->
                <td class="relative px-6 py-4 text-left text-sm">
                  <!-- <Modal @User="user.cod" /> -->
                  <Modal @User="user.cod" />
                </td>
                <!-- Button Delete -->
                <td class="px-2 py-4">
                  <ModalDelete @fetchDelete="fetchDelete(user.cod)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import api from "../../api";
  // import getCep from "../../api/cep";
  import axios from "axios";
  import getAge from "../../utils/getAge";
  import { SearchIcon } from '@heroicons/vue/solid'
  import SearchTable from '../../components/SearchTable.vue'
  import Modal from '../../components/Modal.vue'
  import ModalDelete from '../../components/ModalDelete.vue'

  export default {
    name: "DashboardCard",
    components: {
      SearchTable,
      SearchIcon,
      Modal,
      ModalDelete
    },
    data() {
      return {
        users: [],
        search: '',
        modal: false,
        modaldelete: false,
        loading: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        error: false,
        showModal: false,
        showModalDelete: false,
      };
    },
    methods: {
      async fetchUsers() {
        this.loading = true
        try {
          const response = await api.get('/users')
          this.users = response.data
          this.loading = false
        } catch (error) {
          this.error = true
          this.errorMessage = error.message
          this.loading = false
        }
      },
      // async fetchUser(user) {
      //   this.loading = true
      //   try {
      //     const response = await api.get(`/users/${user}`)
      //     this.getUser = response.data
      //     this.loading = false
      //     console.log(this.user)
      //   } catch (error) {
      //     this.error = true
      //     this.errorMessage = error.message
      //     this.loading = false
      //   }
      // },
      async fetchDelete(user) {
        this.loading = true
        try {
          await api.delete(`/users/${user}`)
          this.loading = false
          this.showModal = false
          this.$emit('deleted')
          this.fetchUsers()
        } catch (error) {
          this.error = true
          this.errorMessage = error.message
          this.loading = false
        }
      },
      async fetchUpdate(cod) {
        this.loading = true
        try {
          const response = await axios.put(`/api/users/${cod}`, this.user)
          this.success = true
          this.successMessage = response.data.message
          this.loading = false
          this.fetchUsers()
        } catch (error) {
          this.error = true
          this.errorMessage = error.message
          this.loading = false
        }
      },
      toggleModal() {
        this.showModal = !this.showModal;
      }
    },
    created() {
      this.fetchUsers();
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user => {
          return user.username.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    setup: () => ({
      getAge
    })
  }
</script>
