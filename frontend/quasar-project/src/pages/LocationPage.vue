<template>
  <q-page padding>
    <!-- content -->
    <div id="map" style="height:500px;"></div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";

export default {
  setup() {
    const initialMap = ref(null);

    onMounted(() => {
      initialMap.value = L.map('map').setView([45.815399, 15.966568], 15);
      const marker = L.marker([45.815399, 15.966568]).addTo(initialMap.value);
      marker.bindPopup("Our HQ!").openPopup();

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(initialMap.value);
    });

    return {
      initialMap
    };
  }
};
</script>