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
       <!-- Table Header  -->

<h1>{{ msg }}</h1>
  <button @click="showModal = true" class="h-10 w-28 rounded-md text-sm font-semibold text-white bg-at-prymary shadow-md" >
    Cadastrar
    <Form
      v-if="showModal"
      label="Cadastrar"
      @users="this.users"
      @yes="createUser"
      @no="showModal = false"
      @close="showModal = false"
    >
    </Form>
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
                  <button
                    class="text-at-primaryhover text-at-primaryfocus focus:outline-none focus:shadow-outline"
                     v-on:click="toggleModal(user)"
                  >
                   
                    <span class="sr-only">Ver</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13.64" viewBox="0 0 18 13.64" style="fill:#767676">
                        <defs>
                        </defs>
                        <g transform="translate(4 -1)">
                        <g transform="translate(-4 1)">
                        <g transform="translate(5.028 2.813)">
                        <path class="a" d="M147.022,142a4.008,4.008,0,1,0,4.008,4.008A4.012,4.012,0,0,0,147.022,142Zm0,6.609a2.6,2.6,0,1,1,2.6-2.6A2.6,2.6,0,0,1,147.022,148.611Z" transform="translate(-143.014 -142.002)"/>
                        </g>
                        <path class="a" d="M17.544,67.288A13.591,13.591,0,0,0,14.4,63.962,8.945,8.945,0,0,0,9.016,62a8.992,8.992,0,0,0-5.392,1.953A13.688,13.688,0,0,0,.463,67.279a2.808,2.808,0,0,0,0,3.089A13.688,13.688,0,0,0,3.623,73.69a8.992,8.992,0,0,0,5.392,1.953,9.751,9.751,0,0,0,6.5-2.9.7.7,0,1,0-.962-1.025,8.385,8.385,0,0,1-5.54,2.515c-3.414,0-6.244-2.918-7.378-4.642a1.4,1.4,0,0,1,0-1.544c1.134-1.724,3.964-4.642,7.378-4.642s6.227,2.921,7.351,4.647a1.407,1.407,0,0,1,0,1.535.7.7,0,1,0,1.178.767A2.814,2.814,0,0,0,17.544,67.288Z" transform="translate(0 -62.003)"/>
                        </g>
                        </g>
                      </svg>
                      <Modal @User="user.cod" />
                  </button>
                  <!-- <Modal @User="user.cod" /> -->
  
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
  import axios from "axios";
  import getAge from "../../utils/getAge";
  import { SearchIcon } from '@heroicons/vue/solid'
  import SearchTable from '../../components/SearchTable.vue'
  import Modal from '../../components/Modal.vue'
  import ModalDelete from '../../components/ModalDelete.vue'
  import Form from '../../components/Form.vue'

  export default {
    name: "DashboardCard",
    components: {
      SearchTable,
      SearchIcon,
      Modal,
      ModalDelete,
      Form
    },
    data() {
      return {
        users: [],
        loading: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        error: false,
        showModal: false,
        showModalDelete: false,
      };
    },
    props: {
      msg: {
        type: String,
        default: '',
      },
    },
    methods: {
      async createUser(data) {
        this.loading = true;
        try {
          const response = await api.post("/users", data);
          this.success = true;
          this.successMessage = response.data.message;
          this.fetchUsers();
        } catch (error) {
          this.error = true;
          this.errorMessage = error.response.data.message;
        }
        this.loading = false;
      },
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
          this.showModalDelete = false
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
        console.log(this.showModal)
      },
      // toggleModalDelete() {
      //   this.showModalDelete = !this.showModalDelete;
      // }
    },
    created() {
      this.fetchUsers();
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user => {
          return user.username.toLowerCase().includes(this.search.toLowerCase())
        })
      },
    },
    setup: () => ({
      getAge
    })
  }
</script>
