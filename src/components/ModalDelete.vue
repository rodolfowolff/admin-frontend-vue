<template>
  <div>
  <Trash v-on:click="toggleModal()" class="cursor-pointer" />
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
              Excluir
            </h3>
            <button class="p-0 ml-auto bg-at-border border-0 rounded-full text-at-gray54 float-right" 
              v-on:click="toggleModal()">
              <span class="bg-transparent text-at-gray54 h-6 w-6 text-sm block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto w-11/12 mx-auto">
            <span class="bg-at-error text-white text-center border-0 rounded-full p-0 float-left h-6 w-6 
              text-sm block outline-none focus:outline-none mr-2 text-base font-medium">
              x
            </span>
            <p class="text-at-gray87 text-sm leading-relaxed font-display">
              Confirma a exclusão deste registro?
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b w-11/12 mx-auto">
            <button class="text-at-error bg-transparent border border-solid border-at-error hover:bg-at-error 
              hover:text-white active:bg-red-600 font-semibold text-sm w-28 h-10 rounded outline-none 
                focus:outline-none mr-1 ease-linear transition-all duration-150" 
            type="button" 
            v-on:click="toggleModal()">
              Cancelar
            </button>
            <button class="text-white bg-at-error border border-solid border-white hover:bg-red-600
               font-semibold text-sm w-20 h-10 rounded outline-none 
                focus:outline-none ml-1" 
              type="button" 
              v-on:click="toggleModal()">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import Trash from './icons/Trash.vue'

export default {
  name: "Modal",
    components: {
    Trash
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
}
</script>
