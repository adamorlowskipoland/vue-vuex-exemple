<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addLink">
        <input type="text"
               class="link-input"
               placeholder="Add a link"
               v-model="newLink">
      </form>

      <ul>
        <li v-for="(link, index) in links"
            v-bind:key="index">
          {{ link }}
          <button v-on:click="removeLinks(index)"
                  class="rm">
            Remove
          </button>
        </li>
      </ul>
    </div>
    <div class="right">
      <stats/>
    </div>
  </div>
</template>

<script>
  import Stats from '@/components/Stats.vue'
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'Vuex_Exemple',
    components: {
      Stats
    },
    data () {
      return {
        newLink: null
      }
    },
    computed: {
      ...mapState([
        'title',
        'links'
      ]),
//      other stuff
    },
    methods: {
      ...mapMutations([
        'ADD_LINK'
      ]),
      ...mapActions([
        'removeLink'
      ]),
      addLink () {
        this.ADD_LINK(this.newLink)
        this.newLink = null
      },
      removeLinks (link) {
        this.removeLink(link)
      }
    }
  }
</script>
<style>
  html, #app, .home {
    height: 100%;
  }

  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas: "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .link-input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background-color: #ff9f8a;
    border: none;
    padding: 5px;
    color: #ff2800;
    cursor: pointer;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

</style>
