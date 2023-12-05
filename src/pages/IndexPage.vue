<template>
  <q-page>
    <div class="player">
      <div class="wrapper">
        <div class="details">
          <div class="track-art">
            <img
              :class="`track-art image ${isPlaying?'rotate2':''}`"
              alt="STUDIO94 logo"
              src="~assets/logo.png"
              style="width: 98%; height: 98%"
            />
          </div>
          <!-- <div class="track-name">{{ nombre }}</div>
          <div class="track-artist">Track Artist</div> -->
        </div>

        <!-- <div class="slider_container">
          <i class="fa fa-volume-down"></i>
          <input
            type="range"
            min="1"
            max="100"
            value="99"
            class="volume_slider"
            onchange="setVolume()"
          />
          <i class="fa fa-volume-up"></i>
        </div> -->
        <div v-show="isPlaying" id="wave" class="loader">
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
        </div>

        <div class="buttons text-center">
          <div v-if="!isPlaying" class="playpause-track" @click="playTrack()">
            <q-icon size="8rem" class="play_control" name="play_circle_outline" />
          </div>
          <div v-else class="playpause-track" @click="pauseTrack()">
            <q-icon size="8rem" class="play_control" name="pause_circle_outline" />
          </div>
        </div>


      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
let curr_track = document.createElement("audio");
let track_art = document.querySelector(".track-art");
export default {
  name: "IndexPage",
  data() {
    return {
      nombre: "JORGE ARCE",
      now_playing: "Sonando",
      isPlaying: false,
    };
  },
  created() {
    this.loadTrack();
  },
  methods: {
    loadTrack() {
      console.log("reproduciendo");
      curr_track.src = "https://ssl.aloncast.com:1654;"; // music_list[track_index].music;
      curr_track.load();

      console.log(
        "🚀 ~ file: IndexPage.vue:68 ~ loadTrack ~ curr_track:",
        curr_track
      );
    },
    playTrack() {
      curr_track.play();
      this.isPlaying = true;
      // wave.classList.add('loader');
    },
    pauseTrack() {
      curr_track.pause();
      this.isPlaying = false;
      // wave.classList.add('loader');
    },
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to Top, #84062C, #F61548);
  font-weight: bold;
}
.player {
  display: flex;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.play_control{
  color: white;
}
.wrapper {
  border: 1px solid transparent;
  padding: 20px;
  border-radius: 30px;
  /* background-color: #ddd; */
  background: #23252c00;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.details {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.now-playing {
  font-size: 1rem;
}

.track-name {
  font-size: 2.5rem;
}

.track-artist {
  margin-top: 5px;
  font-size: 1.5rem;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.active {
  color: black;
}

.playpause-track {
  padding: 10px;
  opacity: 0.8;
  z-index: 1;
  transition: opacity 0.2s;
}

.playpause-track:hover {
  opacity: 1;
}

.slider_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.volume_slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 5px;
  background: #83a9ff;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.volume_slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: white;
  border: 3px solid #3774ff;
  cursor: grab;
  border-radius: 100%;
}

.volume_slider:hover {
  opacity: 1;
}
.volume_slider {
  width: 30%;
}

.rotate2 {
  animation: rotation 8s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.loader {
  margin: 2rem 0;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader .stroke {
  background: #f1f1f1;
  height: 150%;
  width: 10px;
  border-radius: 50px;
  margin: 0px 5px;
  animation: animate 1.4s linear infinite;
}


@keyframes animate {
  50% {
    height: 20%;
    background: #71ffaf;
  }

  100% {
    background: #007151;
    height: 100%;
  }
}

.stroke:nth-child(1) {
  animation-delay: 0s;
}
.stroke:nth-child(2) {
  animation-delay: 0.3s;
}
.stroke:nth-child(3) {
  animation-delay: 0.6s;
}
.stroke:nth-child(4) {
  animation-delay: 0.9s;
}
.stroke:nth-child(5) {
  animation-delay: 0.6s;
}
.stroke:nth-child(6) {
  animation-delay: 0.3s;
}
.stroke:nth-child(7) {
  animation-delay: 0s;
}

:root {
  --track-art-height: 40vh;
  --track-art-width: calc(var(--track-art-height) / 1);
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

/* .track-art {
  margin: 25px;
  height: 250px;
  width: 250px;
  border: 2px solid #fffafa;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  -moz-box-shadow: 0px 6px 5px black;
  -webkit-box-shadow: 0px 6px 5px black;
  box-shadow: 0px 6px 5px black;
  -moz-border-radius: 190px;
  -webkit-border-radius: 190px;
  border-radius: 190px;
} */

.track-art {
  background: #161616;
  width: var(--track-art-width);
  height: var(--track-art-height);
  padding: 3px;
  position: relative;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
  box-shadow: 0 0 40px rgb(255, 255, 255);
}

.image {
  z-index: 2;
  object-fit: contain;


}

.track-art::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 50%;
  background-image: linear-gradient(
    var(--rotate),
    #71ffaf,
    #28fec1 43%,
    #08100e
  );
  position: absolute;
  z-index: 0;
  top: -1%;
  left: -2%;
  animation: spin 2.5s normal infinite;
}
/*
.track-art::after {
  position: absolute;
  content: "";
  top: calc(var(--track-art-height) / 6);
  left: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 50%;
  transform: scale(1);
  filter: blur(calc(var(--track-art-height) / 6));
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: spin 2.5s linear infinite;
} */

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>
