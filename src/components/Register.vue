<template>
  <div id="register">
    <h2>註冊</h2>
    <form>
      <div class="form-group">
        <input placeholder="First Name">
      </div>
      <div class="form-group">
        <input placeholder="Last Name">
      </div>
      <div class="form-group">
        <input placeholder="Email address">
      </div>
      <div class="form-group">
        <input placeholder="Pick a password">
      </div>
      <div class="form-group">
        <input placeholder="Confirm password">
      </div>
      <div class="form-group">
        <button class="btn">Sign up</button>
      </div>
    </form>
    <famoux></famoux>
  </div>
</template>

<script>
  import Famoux from './Famous.vue'
  export default {
    components: {
      Famoux
    },
    created () {
      console.log('register')
    }
  }
</script>
