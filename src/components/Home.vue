<template>
  <div class="home">
    <h1>Bienvuenue sur Deezweb</h1>
    <div v-if="randomSong" class="random-favorit-container">
      <TrackCard @dislike="removeFavorit" :songs="randomSong"/>
      <button class="random-btn" @click="changesong">
        <i class="fas fa-random"></i>
        Choisir une autre musique
      </button>
    </div>
  </div>
</template>

<script>
import TrackCard from './TrackCard.vue';

export default {
  name: 'Home',
  components: {
    TrackCard,
  },
  data() {
    return {
      favoritsSongs: null,
      randomSong: null,
    };
  },
  created() {
    this.favoritsSongs = JSON.parse(localStorage.getItem('favoritsSongs'));
    this.randomSong = this.favoritsSongs[Math.floor(Math.random() * this.favoritsSongs.length)];
  },
  methods: {
    removeFavorit(id) {
      this.favoritsSongs = this.favoritsSongs.filter(song => song.id !== id);
      this.randomSong = this.favoritsSongs[Math.floor(Math.random() * this.favoritsSongs.length)];
    },
    changesong() {
      this.randomSong = this.favoritsSongs[Math.floor(Math.random() * this.favoritsSongs.length)];
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

.random-favorit-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.random-btn {
  background-color: #42B983;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 8px 20px;
  width: 15vw;
  margin-top: 3%;
}
</style>
