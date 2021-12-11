<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-y-auto z-60" @click="$emit('close')">
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
          shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button 
                type="button" 
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                @click="$emit('close')">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full 
              bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  Excluir
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Confirma a exclusão deste registro?
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button 
                type="button" 
                class="text-white bg-at-error border border-solid border-white hover:bg-red-700
               font-semibold text-sm w-full h-10 rounded outline-none focus:outline-none shadow-md
               sm:w-full sm:text-sm" 
                @click="deleteUser">
                Excluir
              </button>
              <button 
                type="button" 
                class="text-at-error bg-transparent border border-solid border-at-error hover:bg-red-600
              hover:text-white active:bg-red-600 font-semibold text-sm w-full h-10 rounded outline-none 
                focus:outline-none mr-1 ease-linear transition-all duration-150 shadow-md sm:ml-3 sm:w-full 
                 sm:text-sm" 
                @click="$emit('no')">
                Cancelar
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name: 'ModalDelete',
  props: ['cod'],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
    XIcon,
  },
  setup() {
    const open = ref(true)
    return {
      open,
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch('deleteUser', this.cod)
       console.log('this.cod!', this.cod);
      this.$router.push({ path: '/'})
    }
  },
}
</script>
