<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-y-auto z-60" @click="onReset">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" 
        enter-from="opacity-0" 
        enter-to="opacity-100" 
        leave="ease-in duration-200" 
        leave-from="opacity-100" 
        leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <TransitionChild 
          as="template" 
          enter="ease-out duration-300" 
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" 
          enter-to="opacity-100 translate-y-0 sm:scale-100" 
          leave="ease-in duration-200" 
          leave-from="opacity-100 translate-y-0 sm:scale-100" 
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden 
            shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button 
                type="button" 
                class="bg-white rounded-md text-gray-400 hover:text-gray-500" 
                 @click="onReset">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <form @submit="onSubmit" @reset="onReset" class="space-y-8 divide-y divide-gray-200">
              <div class="space-y-4 divide-y divide-gray-200">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Adicionar
                  </h3>
                </div>

                <div class="pt-0">
                  <div class="mt-3 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-2">
                      <label for="cod" class="block text-sm font-medium text-gray-700">
                        ID
                      </label>
                      <div class="mt-1">
                        <input 
                          type="number" 
                          name="cod" 
                          id="cod" 
                          v-model="userAddForm.cod"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Digite um ID"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-4">
                      <label for="username" class="block text-sm font-medium text-gray-700">
                        Nome
                      </label>
                      <div class="mt-1">
                        <input 
                          type="text" 
                          name="username" 
                          id="username" 
                          v-model="userAddForm.username"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm 
                            border-gray-300 rounded-md" 
                          placeholder="Digite um nome"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="dateofbirth" class="block text-sm font-medium text-gray-700">
                        Idade
                      </label>
                      <div class="mt-1">
                        <input 
                          id="dateofbirth" 
                          name="dateofbirth" 
                          type="tel"
                          maxlength="10"
                          placeholder="dd/mm/yyyy"
                          v-model="userAddForm.dateofbirth"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-4">
                      <label for="githubusername" class="block text-sm font-medium text-gray-700">
                        Github User
                      </label>
                      <div class="mt-1">
                        <input 
                          type="text" 
                          name="githubusername" 
                          id="githubusername" 
                          v-model="userAddForm.githubusername"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm 
                            border-gray-300 rounded-md" 
                          placeholder="Usuário do Github"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-1">
                      <label for="cep" class="block text-sm font-medium text-gray-700">
                        CEP
                      </label>
                      <div class="mt-1">
                        <input 
                          type="text" 
                          name="cep" 
                          id="cep" 
                          @input="getCep($event)"
                          v-model="userAddForm.cep"
                          autocomplete="postal-code" 
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                          placeholder="00.000-000"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-1">
                      <label for="uf" class="block text-sm font-medium text-gray-700">
                        Estado
                      </label>
                      <div class="mt-1">
                        <input 
                        type="text" 
                        name="uf" 
                        id="uf" 
                        v-model="userAddForm.uf"
                        class="shadow-sm focus:ring-at-prymary focus:border-at-prymary block w-full 
                          sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                    
                    <div class="sm:col-span-2">
                      <label for="localidade" class="block text-sm font-medium text-gray-700">
                        Cidade
                      </label>
                      <div class="mt-1">
                        <input 
                        type="text" 
                        name="localidade" 
                        id="localidade" 
                        v-model="userAddForm.localidade"
                        class="shadow-sm focus:ring-at-prymary focus:border-at-prymary block w-full 
                          sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="bairro" class="block text-sm font-medium text-gray-700">
                        Bairro
                      </label>
                      <div class="mt-1">
                        <input 
                        type="text" 
                        name="bairro" 
                        id="bairro" 
                        v-model="userAddForm.bairro"
                        class="shadow-sm focus:ring-at-prymary focus:border-at-prymary block w-full 
                          sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="logradouro" class="block text-sm font-medium text-gray-700">
                        Rua
                      </label>
                        <div class="mt-1">
                          <input 
                            type="text" 
                            name="logradouro" 
                            id="logradouro" 
                            v-model="userAddForm.logradouro"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                            placeholder="Rua Brasil"
                          />
                        </div>
                    </div>
                       <div class="sm:col-span-1">
                      <label for="numero" class="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <div class="mt-1">
                        <input 
                        type="text" 
                        name="numero" 
                        id="numero" 
                        v-model="userAddForm.numero"
                        class="shadow-sm focus:ring-at-prymary focus:border-at-prymary block w-full 
                          sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>

                   <div class="sm:col-span-2">
                      <label for="complemento" class="block text-sm font-medium text-gray-700">
                        Complemento
                      </label>
                      <div class="mt-1">
                        <input 
                        type="text" 
                        name="complemento" 
                        id="complemento" 
                        v-model="userAddForm.complemento"
                        class="shadow-sm focus:ring-at-prymary focus:border-at-prymary block w-full 
                          sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>

                    </div>
                  </div>
                </div>
            
              <div class="pt-5">
                <div class="flex justify-end">
                  <button 
                    class="bg-white py-2 px-4 border-2 border-at-prymary rounded-md shadow-md text-sm 
                      font-medium text-at-prymary hover:bg-at-prymary hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                      focus:ring-yellow-500"
                    type="reset"
                    >
                    Cancelar
                  </button>
                  <button 
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm 
                      font-medium rounded-md text-white bg-at-prymary hover:bg-yellow-400 focus:outline-none focus:ring-2 
                      focus:ring-offset-2 focus:ring-offset-at-prymary"
                    type="submit"
                    >
                    Salvar
                  </button>
                </div>
              </div>

            </form>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import getCEPByAddress from '../api/cep'
import formatDate from '../utils/formatDateBR.js'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name: 'Modal',
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
    XIcon,
  },
  data() {
    return {
      userAddForm: {
        cod: '',
        username: '',
        dateofbirth: '',
        cep: '',
        uf: '',
        localidade: '',
        bairro: '',
        logradouro: '',
        numero: '',
        complemento: '',
        githubusername: '',
      },
    }
  },
  setup() {
    const open = ref(true);
    return {
      open,
    }
  },
  methods: {
    getCep(event) {
      const cep = event.target.value
      if (cep.length >= 8) {
        cep.replace(/[^0-9]/g, '')
        getCEPByAddress(cep)
          .then(response => {
            this.userAddForm.cep = response.cep
            this.userAddForm.uf = response.uf
            this.userAddForm.localidade = response.localidade
            this.userAddForm.bairro = response.bairro
            this.userAddForm.logradouro = response.logradouro
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    createUser(payload) {
      this.$store.dispatch('createUser', payload);
      this.$router.push({ path: '/' });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        cod: this.userAddForm.cod,
        username: this.userAddForm.username,
        dateofbirth: formatDate(this.userAddForm.dateofbirth),
        cep: this.userAddForm.cep,
        uf: this.userAddForm.uf,
        localidade: this.userAddForm.localidade,
        bairro: this.userAddForm.bairro,
        logradouro: this.userAddForm.logradouro,
        numero: this.userAddForm.numero,
        complemento: this.userAddForm.complemento,
        githubusername: this.userAddForm.githubusername,
      };
      console.log("payload", payload);
      this.createUser(payload);
    },
    onReset() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>
