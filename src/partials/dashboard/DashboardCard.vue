<template>
  <div class="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="flex items-center px-4 py-2">
      <button class="h-10 w-28 rounded-md text-sm font-semibold
          text-white bg-at-prymary shadow-md">
        <span>Cadastrar</span>
      </button>

      <SearchTable />

    </header>

    <div class="overflow-x-auto">
      <div class="pb-10 align-middle inline-block min-w-full sm:px-4">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54 tracking-wider">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54 tracking-wider">
                  Nome
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54 tracking-wider">
                  Idade
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54 tracking-wider">
                  GitHub User
                </th>
                <th scope="col" class="px-6 py-3 font-display text-left text-sm font-medium text-at-gray54 tracking-wider">
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
              <tr v-for="user in users" :key="user.username" class="hover:bg-at-bgtrhover">
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
                <td class="px-2 py-4">
                  <Eye />
                </td>
                <td class="px-3 py-4">
                  <Trash />
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
import getAge from "../../utils/getAge";
import SearchTable from "../../components/SearchTable.vue";
import { SearchIcon } from '@heroicons/vue/solid'
import Trash from '../../components/icons/Trash.vue'
import Eye from '../../components/icons/Eye.vue'

export default {
  name: 'Dashboard',
    components: {
    SearchTable,
    SearchIcon,
    Trash,
    Eye
  },
  data() {
     return {
       users: {},
     };
   },
   created() {
     this.getUser();
   },
   methods: {
     getUser() {
       api
         .get("/users")
         .then((res) => {
           this.users = res.data;
         })
         .catch((error) => {
           console.log(error);
         });
     },
   },
   setup () {
    return {
      getAge,
    }
  }
}
</script>
