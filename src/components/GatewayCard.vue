<template>
<div class="main-card">
  <div class="card" style="padding-left: 10px" @click="clientData(1)">
    <img :src="victronImg" alt="Avatar">
    <div class="container">
      <h6><b>Clients</b>: 3</h6>
    </div>
  </div>
  <div class="card" style="padding-left: 10px" @click="clientData(2)">
    <img :src="froniusImg" alt="Avatar">
    <div class="container">
      <h6><b>Clients</b>: 2</h6>
    </div>
  </div>
  <div class="card" @click="clientData(3)">
    <img :src="smaImg" alt="Avatar">
    <div class="container">
      <h6><b>Clients</b>: 1</h6>
    </div>
  </div>
</div>
<hr>
<ClientCard :clients="clients" />
</template>
<script>
import ClientCard from './ClientCard.vue'
export default {
  name: "GatewayCard",
  components: {
    ClientCard,
  },
  data() {
    return {
      victronImg: require("../assets/victron-logo-header.svg"),
      froniusImg: require("../assets/fronius-logo.svg"),
      smaImg: require("../assets/sma-logo.svg"),
      clients: [],
    }
  },
  methods: {
    clientData(id) {
      this.clients = this.allClients.filter((item) => item.gatewayId == id);
      console.log(id)
    }
  },
  created() {
    this.allClients = [{
        id: 1,
        name: "Fortune Sacco Makutano",
        battery: "50.0%",
        solar: "800w",
        load: "396w",
        grid: "-40w",
        generator: "",
        tank: "",
        lastUpdate: "A few seconds ago",
        alarm: "",
        gatewayId: 1
      },
      {
        id: 2,
        name: "Fortune Sacco, Kagumo Branch",
        battery: "71.0%",
        solar: "2800w",
        load: "2396w",
        grid: "-24w",
        generator: "",
        tank: "",
        lastUpdate: "3 days ago",
        alarm: "",
        gatewayId: 1
      },
      {
        id: 3,
        name: "John Wakhanu",
        battery: "77.0%",
        solar: "645w",
        load: "225w",
        grid: "235w",
        generator: "",
        tank: "",
        lastUpdate: "A minute ago",
        alarm: "",
        gatewayId: 1
      },
      {
        id: 4,
        name: "Fortune Sacco Kagumo",
        battery: "75.0%",
        solar: "1800w",
        load: "1396w",
        grid: "40w",
        generator: "",
        tank: "",
        lastUpdate: "A few seconds ago",
        alarm: "",
        gatewayId: 2
      },
      {
        id: 5,
        name: "Simba Energy Annex",
        battery: "80.0%",
        solar: "400w",
        load: "36.60w",
        grid: "8w",
        generator: "",
        tank: "",
        lastUpdate: "A few minutes ago",
        alarm: "",
        gatewayId: 2
      },
      {
        id: 6,
        name: "Nyeri School",
        battery: "20.0%",
        solar: "5000w",
        load: "6060w",
        grid: "1000w",
        generator: "",
        tank: "",
        lastUpdate: "24 hours ago",
        alarm: "",
        gatewayId: 3
      },
    ];
    if(!this.clients.length) {
      this.clients = this.allClients;
    }
  }
}
</script>
<style scoped>
.main-card {
  display: flex;
  margin-left: 4%;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  /* 5px rounded corners */
  width: 20em;
  height: 6em;
  margin: 1em;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 27px;
  /* background: #f1f1f1; */
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}



/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
  width: 49%;
  height: auto;
}
</style>
