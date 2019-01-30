<template>
  <div class="track-card" v-if="songs">
    <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <div class="infos-container">
      <div>
        <img :src="songs.album.cover" alt="">
      </div>
      <div>
        <h3 class="track-card-title"><b class="bold">Titre: </b>{{ songs.title }}</h3>
        <div><b class="bold">Artiste: </b>{{ songs.artist.name }}</div>
        <div><b class="bold">Album: </b>{{ songs.album.title }}</div>
      </div>
    </div>
    <!-- <h3 class="track-card-title"><b class="bold">Titre: </b>{{ songs.title }}</h3> -->
    <!-- <div class="track-infos"> -->
      <!-- <div><b class="bold">Artiste: </b>{{ songs.artist.name }}</div>
      <div><b class="bold">Album: </b>{{ songs.album.title }}</div> -->
    <!-- </div> -->
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
    getFavorits() {
      return JSON.parse(localStorage.getItem('favoritsSongs'));
    },
    addToFavorit() {
      if (!localStorage.getItem('favoritsSongs')) {
        localStorage.setItem('favoritsSongs', JSON.stringify([]));
      }
      if (this.getFavorits().filter(song => song.id === this.songs.id).length > 0) {
        const index = this.getFavorits().map(e => e.id).indexOf(this.songs.id);
        const data = this.getFavorits();
        data.splice(index, 1);
        this.$emit('dislike', this.songs.id);
        localStorage.removeItem('favoritsSongs');
        localStorage.setItem('favoritsSongs', JSON.stringify(data));
        this.liked = 'far';
      } else {
        const existing = this.getFavorits();
        existing.push(this.songs);
        localStorage.removeItem('favoritsSongs');
        localStorage.setItem('favoritsSongs', JSON.stringify(existing));
        this.liked = 'fas';
      }
    },
    checkIsFav() {
      if (this.getFavorits()
          && this.getFavorits().filter(song => song.id === this.songs.id).length > 0) {
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

audio {
  width: 100%;
}
</style>
