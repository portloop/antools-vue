<template>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@font-face {
  font-family: 'Poppins';
  src: url(../public/fonts/Poppins-Medium.ttf);
}

@font-face {
  font-family: 'PoppinsB';
  src: url(../public/fonts/Poppins-Bold.ttf);
}

#app {
  font-family: Poppins, sans-serif;
  background-color: #1E252B;
}

* {
  margin: 0;
  padding: 0;
}

.main-container {
  max-width: 1440px;
  margin: 0 auto;
}

a.orange-button {
  padding: 12px 28px;
  margin: 0;
  border-radius: 8px;
  background: #FF6E30;
  color: #fff;
  text-decoration: none;
}
</style>
