<template>
 <div class="user">
     <div>CEP</div>
     <ul>
       <li v-for="userCep in cep" :key="userCep">
       <div class="mt-10">
         <p>{{ userCep }}</p>

       </div>
       </li>
     </ul>
   </div>
</template>
<script>
  import axios from 'axios';

  export default {
   name: "User",
   data() {
     return {
       cep: [],
     };
   },
   created() {
     this.buscarCep('82840270');
   },
   //Sincroniza com o callback.
  //script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
   methods: {
     buscarCep: function (cep) {
                return axios
                  .get(`https://viacep.com.br/ws/${cep}/json/`)
                  .then((res) => { this.cep = res.data})
                  .catch((error) => { console.log(error)});
     },
   },
  };
</script>
