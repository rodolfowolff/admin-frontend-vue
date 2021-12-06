<template>
 <div class="user">
     <div>User Component</div>
     <ul>
       <li v-for="user in users" :key="user.username">
       <div class="mt-10">
         <p>ID: {{ user.cod }}</p>
         <p>NAME: {{ user.username }}</p>
         <p>DATA ANIVER: {{ user.dateofbirth }}</p>
         <p>GitHub: {{ user.githubusername }}</p>
         <p>Endereço: {{(user.address).map(a => a)}}</p>
        <!--  <p>Endereço: {{(user.address).map(a => a.street)}}</p>
          <p>Endereço: {{(user.address).map(a => a.suite)}}</p>
          <p>Endereço: {{(user.address).map(a => a.city)}}</p>
          <p>Endereço: {{(user.address).map(a => a.zipcode)}}</p>
          -->
       </div>
       </li>
     </ul>
   </div>
</template>
<script>
  import api from "../api";

  export default {
   name: "User",
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
  };
</script>
