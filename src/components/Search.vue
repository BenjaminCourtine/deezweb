<template>
  <div class="search">
    <h1>Recherche</h1>
    <form @submit.prevent="submit">
      <div class="inputs">
        <label>Titre: </label>
        <input type="text" v-model="title"/><br>
      </div>

      <div class="inputs">
        <label>Trier par: </label>
        <select v-model="searchBy">
        <option value="ALBUM_DESC">Album</option>
        <option value="ARTIST_DESC">Artiste</option>
        <option value="TRACK_DESC">Musique</option>
        <option value="RANKING_DESC">Les plus populaires</option>
        <option value="RATING_DESC">Les mieux notés</option>
      </select>
      <button type="submit">Go !</button>
      </div>
    </form>
    <div v-if="songs" class="all-tracks" >
        <TrackCard v-for="(item, index) in songs.data" :key="index" :songs="item" />
    </div>
    <div v-if="songs">
      <div v-if="songs.data.length == 0">
        No results found...
      </div>
    </div>
  </div>
</template>

<script>
import SongService from '../services/SongService';
import TrackCard from './TrackCard.vue';

export default {
  name: 'Search',
  data() {
    return {
      title: '',
      searchBy: 'TRACK_DESC',
      songs: null,
    };
  },
  components: {
    TrackCard,
  },
  methods: {
    submit() {
      SongService.fetchBy(this.title, this.searchBy, 3).then((songs) => {
        this.songs = songs;
        console.log(this.songs.data); // eslint-disable-line
        // console.log(this.searchBy); // eslint-disable-line
      });
    },
    favChange() {

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 24px;
}

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

form {
    display: flex;
    width: 50%;
    margin: 5% auto;
    justify-content: space-around;
    padding: 3%;
    border: 1px solid green;
    border-radius: 15px;
}

form button {
  margin-left: 10px;
}

.all-tracks {
  display: flex;
  justify-content: space-around;
}

</style>
