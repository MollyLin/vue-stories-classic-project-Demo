<template>
  <div>
    <h2>Stories</h2>
    <!-- navigation -->
    <button><router-link :to="{name: 'stories.all'}">All</router-link></button>
    <button><router-link :to="{name: 'stories.famous'}">Trending</router-link></button>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>