<template>
  <div class="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="flex items-center px-5 py-4">
      <button class="h-10 w-28 rounded-md text-sm font-semibold
          text-white bg-at-prymary shadow-md">
        <span>Cadastrar</span>
      </button>
      
      <div :id="id" class="flex justify-end min-w-0 flex-1 md:px-8 lg:px-0">
        <div class="flex items-center px-6 py-3 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
          <div class="w-44">
            <label for="search" class="sr-only">Buscar</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input 
                id="search" 
                name="search" 
                class="bg-gray-50 block w-full border border-t border-at-border rounded-md py-2 pl-10 pr-3 text-sm 
                placeholder-gray-500 focus:outline-none focus:text-gray-500 focus:placeholder-gray-400 
                focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm" 
                placeholder="Buscar" 
                type="search" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="-my-2 overflow-x-auto">
      <div class="pb-10 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-at-gray54 tracking-wider">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-at-gray54 tracking-wider">
                  Nome
                </th>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-at-gray54 tracking-wider">
                  Idade
                </th>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-at-gray54 tracking-wider">
                  GitHub User
                </th>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-at-gray54 tracking-wider">
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
              <tr v-for="person in people" :key="person.email" class="hover:bg-at-bgtrhover">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-at-gray87">
                  {{ person.id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-at-gray87">
                  {{ person.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-at-gray87">
                  {{ person.age }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-at-gray87">
                  {{ person.github_user }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-at-gray87">
                  {{ person.address }}
                </td>
                <td class="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Ver</a>
                </td>
                <td class="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Deletar</a>
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
import { SearchIcon } from '@heroicons/vue/solid'
const people = [
  { id: '123456', name: 'João da Sila', age: '18 anos', github_user: 'joaodev', address: 'rua x do Brasil, 889 - Bairro teste - Curitiba/PR' },
  { id: '123456', name: 'João da Sila', age: '18 anos', github_user: 'joaodev', address: 'rua x do Brasil, 889 - Bairro teste - Curitiba/PR' },
  { id: '123456', name: 'João da Sila', age: '18 anos', github_user: 'joaodev', address: 'rua x do Brasil, 889 - Bairro teste - Curitiba/PR' },
  { id: '123456', name: 'João da Sila', age: '18 anos', github_user: 'joaodev', address: 'rua x do Brasil, 889 - Bairro teste - Curitiba/PR' },
]

export default {
  name: 'Dashboard',
    components: {
    SearchIcon
  },
  setup() {
    return {
      people,
    }
  },
}
</script>
