<script setup>
async function doAThing() {
    const result = await requestDATA();
    console.log(result);
}
</script>

<template>
<nav>
    <h1>Harmonize</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/SignUp">Sign Up</router-link> |
    <router-link to="/Playlist">Playlist</router-link> |
    <router-link to="/Liked Songs">Liked Songs</router-link> |
<button @click=""></button>
</nav>
<router-view />

 </template>

<style>
body {
    background-color: #007f8e;
text-align: center;
}
body {
   
}
</style>
