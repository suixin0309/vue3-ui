<template>
  <div>导航栏 | 
    <router-link to="/">xin</router-link>|
    <router-link to="/xxx">xin2</router-link>


  </div>
  <hr />
  <router-view>

  </router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>
