<template>
  <div class="track-card" v-if="songs">
    <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <h3 class="track-card-title"><b class="bold">Titre: </b>{{ songs.title }}</h3>
    <div class="track-infos">
      <div><b class="bold">Artiste: </b>{{ songs.artist.name }}</div>
      <div><b class="bold">Album: </b>{{ songs.album.title }}</div>
    </div>
    <audio controls :src="songs.preview" type="audio/mpeg" />
    <a href="#" class="favorit-btn" @click.prevent="addToFavorit">
      <i class="fa-heart" :class="updateFav" id="btn"></i>
    </a>
  </div>
</template>

<script>

export default {
  name: 'TrackCard',
  props: {
    songs: Object,
  },
  data() {
    return {
      liked: 'far',
    };
  },
  methods: {
    addToFavorit() {
      if (localStorage.getItem(this.songs.id)) {
        localStorage.removeItem(this.songs.id);
        this.liked = 'far';
      } else {
        localStorage.setItem(this.songs.id, JSON.stringify(this.songs));
        this.liked = 'fas';
      }
      if (localStorage.getItem(this.songs.id)) {
        this.liked = 'fas';
      }
    },
    checkIsFav() {
      if (localStorage.getItem(this.songs.id)) {
        this.liked = 'fas';
      } else {
        this.liked = 'far';
      }
    },
  },
  computed: {
    updateFav() {
      this.checkIsFav();
      return this.liked;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test{
  color: blue;
}

h1 {
  font-size: 24px;
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

.track-card {
  border: 1px solid green;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 2% 3% 0 3%;
}

.track-card-title {
  margin-bottom: 3%;
  font-weight: lighter;
}

.track-infos {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 3%;
}

.bold {
  font-weight: bold;
}

.favorit-btn {
  margin: 2%;
}
</style>
