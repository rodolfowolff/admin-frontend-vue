<template>
  <div>
    <h1 v-text="title"></h1>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Informe o CEP:" v-model="cep">
        <button type="submit">Buscar CEP</button>
    </form>
    <div v-if="preloader">
        <br>
        Carregando...            
    </div>
    <div v-if="error != ''">
        {{error}}
    </div>
    
    <div v-show="address.cep">
    <p><b>Bairro: </b>{{address.bairro? address.bairro : ''}}</p>
    <p><b>Cidade: </b>{{address.localidade? address.localidade : ''}}</p>
    <p><b>Estado: </b>{{address.uf? address.uf : ''}}</p>
    <p><b>Cep: </b>{{address.cep? address.cep : ''}}</p>
    <p><b>Complemento: </b>{{address.complemento? address.complemento : ''}}</p>
    <p><b>Ibge: </b>{{address.ibge? address.ibge : ''}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
      title: 'Consulte CEPs de todo o Brasil',
      cep: '',
      address:{},
      preloader: false,
      error: ''
    }
  },
  methods:{
    onSubmit(){
    if (this.cep == '') {
      this.error = 'Informe o CEP';
      return;
    }
    if (this.cep.length != 8) {
      this.error = 'CEP inválido';
      return;
    }
    if (!this.cep.match(/^[0-9]+$/)) {
      this.error = 'CEP inválido';
      return;
    }
      this.reset(),
      this.preloader = true
      axios.get('https://viacep.com.br/ws/'+this.cep+'/json/')
      .then(response =>{
        this.address = response.data
        this.preloader = false
      })
      .catch(error =>{
        this.error = error.message
        this.preloader = false
      })
    },
    reset(){
      this.error = '',
      this.address={}
    }
  }
}
</script>
