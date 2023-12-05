<template>
  <q-page>
    <div class="player">
      <div class="wrapper">
        <div class="q-pa-md row items-start q-gutter-md"></div>
        <q-card class="my-card" flat bordered>
          <q-img src="~assets/logomain.png" />

          <q-card-section>
            <div class="text-overline text-orange-9">
              La Original FM | La mejor música
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">Contacto</div>
            <div class="text-caption text-grey">
              Información y contrataciones
            </div>
          </q-card-section>

          <div class="column items-center">
            <q-card-actions>
              <q-btn
                flat
                color="green-6"
                label="Whatsapp"
                icon="phone"
                @click="redirectToWhatsApp"
              /><br />
              <q-btn
                flat
                color="blue-10"
                label="Facebook"
                icon="facebook"
                @click="redirectToFacebook"
              />
              <q-btn
                flat
                color="blue-10"
                label="Web"
                icon="language"
                @click="redirectToWeb"
              />
              <q-space />
            </q-card-actions>
          </div>
        </q-card>
      </div>
      <!-- <div class="column" style="height: 150px">
          <div class="col">
            <q-btn color="teal">
              <q-icon push left size="3em" name="phone" />
              <div>Whatsapp</div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn round color="primary" icon="facebook" />
            <q-btn round color="secondary" icon="navigation" />
          </div>
        </div> -->
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
    redirectToWhatsApp() {
      const phoneNumber = "59176155280"; // Reemplaza con el número de teléfono deseado
      const message = "Hola!!, Radio la Original. "; // Mensaje opcional

      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    },
    redirectToFacebook() {
      const url = `https://www.facebook.com/LAORIGINALFMBOLIVIA`;
      window.open(url, "_blank");
    },
    redirectToWeb() {
      const url = `https://www.laoriginalfm.com/`;
      window.open(url, "_blank");
    },

    loadTrack() {
      console.log("reproduciendo");
      curr_track.src = "https://ssl.aloncast.com:1582/;"; // music_list[track_index].music;
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
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
