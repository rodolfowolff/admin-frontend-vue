<template>
  <div v-on:click="toggleModal()">
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed 
      inset-0 z-50 outline-none focus:outline-none 
      justify-center items-center flex">
      <div class="relative h-52 w-96 my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full
           bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t w-11/12 mx-auto">
            <h3 class="text-lg font-semibold text-at-gray87">
              Editar 
              {{Object.values(Item).map((item, index) => item.cod === this.user ? item : 'nao deu boa2')}}
              

            </h3>
            <button class="p-0 ml-auto bg-at-border border-0 rounded-full text-at-gray54 float-right" 
              v-on:click="toggleModal()">
              <span class="bg-transparent text-at-gray54 h-6 w-6 text-sm block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          <!--body
          <div class="relative p-6 flex-auto w-11/12 mx-auto">
            <span class="bg-at-error text-white text-center border-0 rounded-full p-0 float-left h-6 w-6 
              text-sm block outline-none focus:outline-none mr-2 text-base font-medium">
              x
            </span>

            <div v-for="info in Item" :key="info.cod" class="mt-4">
              <p v-if="info.length === 0" class="text-at-gray87 text-sm leading-relaxed font-display">
                Erro ao carregar informações do usuário.
              </p>
              <div v-else>
                <p class="text-at-gray87 text-sm leading-relaxed font-display">
                  Editar informações do usuário.
                </p>
                <div class="flex items-center">
                  <label class="text-at-gray87 text-sm leading-relaxed font-display">
                  ID:
                  </label>
                  <input v-model="info.username" class="ml-2 w-full border-0 rounded-full outline-none focus:outline-none" 
                    type="text" placeholder="ID" />
                </div>
              </div>

            </div>

          </div>
-->
          <!--  footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b w-11/12 mx-auto">
            <button class="text-at-error bg-transparent border border-solid border-at-error hover:bg-at-error 
              hover:text-white active:bg-red-600 font-semibold text-sm w-28 h-10 rounded outline-none 
                focus:outline-none mr-1 ease-linear transition-all duration-150 shadow-md" 
            type="button" 
            v-on:click="toggleModal()">
              Cancelar
            </button>
            <button class="text-white bg-at-error border border-solid border-white hover:bg-red-600
               font-semibold text-sm w-20 h-10 rounded outline-none focus:outline-none ml-1 shadow-md" 
              type="button" >
              Salvar
            </button>
             <!-- @click="fetchDelete()"> -->
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>

</template>

<script>
import api from '../api'
import Eye from './icons/Eye.vue'

export default {
  name: "Modal",
    components: {
    Eye
  },
  data() {
    return {
      showModal: false,
      user: '',
      Item: {},
    }
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    },
    User() {
      this.$emit('User', this.user);
    },
      async fetchUser(cod) {
        this.loading = true
        try {
            const response = await api.get(`/users/${cod}`)
            this.Item = response.data;
            this.loading = false
        } catch (error) {
          this.error = true
          this.errorMessage = error.message
          this.loading = false
        }
      },
  },
  created() {
    this.fetchUser(this.user)
  },
}
</script>
