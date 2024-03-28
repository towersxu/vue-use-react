<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <div id="root">11</div>
    <button @click="plus">click</button>
  </div>
</template>

<script>
import demo from './demo.jsx'
console.log('demo', demo)
import { render } from 'react-dom'
import React from 'react'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    const r = React.createElement(demo, {
      count: this.count
    })
    render(r, document.getElementById('root'))
    console.log(r)
    this.r = r
  },
  methods: {
    plus() {
      this.count++
      console.log(this.count)
      this.render()
      // this.r.props.count = this.count
    },
    render() {
      const r = React.createElement(demo, {
        count: this.count
      })
      render(r, document.getElementById('root'))
      console.log(r)
      this.r = r
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
