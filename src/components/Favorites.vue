<template>
  <div class="favorites">
    <h1>Vos musiques favorites</h1>
    <div v-if="favoritsSongs.length > 0" class="favorits-songs-container">
      <TrackCard @dislike="removeFavorit" class="favorit-song" v-for="(item, index) in favoritsSongs" :key="index" :songs="item"/>
    </div>
    <div v-else>
      <p>Aucun favoris dans votre liste ...</p>
    </div>
  </div>
</template>

<script>
import TrackCard from './TrackCard.vue';

export default {
  name: 'Favorites',
  components: {
    TrackCard,
  },
  data() {
    return {
      favoritsSongs: null,
    };
  },
  created() {
    this.favoritsSongs = JSON.parse(localStorage.getItem('favoritsSongs'));
  },
  methods: {
    removeFavorit(id) {
      this.favoritsSongs = this.favoritsSongs.filter(song => song.id !== id);
    },
  },
};
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

.favorits-songs-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 3%;
}

.favorit-song {
  padding: 3%;
  margin-bottom: 5%;
  width: 27vw;
}
</style>
