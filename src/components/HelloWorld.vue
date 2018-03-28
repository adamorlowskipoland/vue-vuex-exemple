<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Vuex Exemple',
    computed: {
      ...mapState([
        'title'
      ]),
//      other stuff
    }
  }
</script>
