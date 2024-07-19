<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="cabecera text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>Live Acoustic </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="200"
      :breakpoint="400"
      side="left"
      behavior="mobile"
      elevated
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            dense
            v-ripple
            clickable
            exact
            v-for="item in menuItems"
            :key="item.name"
            @click="changeActive(item.name)"
            :to="item.url"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
              <q-item-label caption>
                {{ item.description }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            dense
            v-ripple
            clickable
            exact
            class="absolute-bottom q-mb-md"
          >
            <q-item-section>
              <a href="https://hostingbol.com" target="_blank">
                <q-img
                  class="absolute-bottom"
                  src="~assets/LOGOHOSTINGBOL.png"
                  style="height: 55px"
                ></q-img>
              </a>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top q-mt-5" src="~assets/logored.jpg" style="height: 150px; object-fit: contain;">
        <!-- <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~assets/logo.png" />
          </q-avatar>
          <div class="text-weight-bold">Studio 94</div>
          <div>New Radio Imaging</div>
        </div> -->
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const menuItems = ref([
      {
        name: "reproductor",
        label: "Radio Online",
        description: "Escucha nuestra radio online",
        active: ref(false),
        url: "/",
        icon: "radio",
      },
      {
        name: "contacto",
        label: "Contacto",
        description: "Información y contrataciones",
        active: ref(false),
        url: "/contacto",
        icon: "phone",
      },
      // Agrega aquí más ítems si es necesario
    ]);
    const changeActive = (itemName) => {
      menuItems.value.forEach((item) => {
        item.active = false;
      });
      console.log("Menuitems", menuItems.value);

      // Establecer el ítem actual a activo (active: true)
      // const item = this.menuItems.value.find((item) => item.name === itemName);
      // if (item) {
      //   item.active.value = true;
      // }
    };

    return {
      leftDrawerOpen,
      menuItems,
      changeActive,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style>
.cabecera {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to Bottom, #84062C, #F5212D);
  font-weight: bold;
}
</style>
