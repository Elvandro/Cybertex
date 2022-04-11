<template>
<div class="row header-row">
  <h4><b>All My Installations</b></h4>
</div>
<div class="container">
  <div class="row">
    <div class="row-header">
      Installation Name
    </div>
    <div class="row-header">
      Battery
    </div>
    <div class="row-header">
      Solar
    </div>
    <div class="row-header">
      Load
    </div>
    <div class="row-header">
      Grid
    </div>
    <div class="row-header">
      Generator
    </div>
    <div class="row-header">
      Tank
    </div>
    <div class="row-header">
      Last Update
    </div>
    <div class="row-header">
      Alarm
    </div>
  </div>
  <br>
  <div class="row" :key="client.id" v-for="client in clients">
    <div class="row-info">
      {{client.name}}
    </div>
    <div class="row-info">
      {{client.battery}}
    </div>
    <div class="row-info">
      {{client.solar}}
    </div>
    <div class="row-info">
      {{client.load}}
    </div>
    <div class="row-info">
      {{client.grid}}
    </div>
    <div class="row-info">
      {{client.generator}}
    </div>
    <div class="row-info">
      {{client.tank}}
    </div>
    <div class="row-info">
      {{client.lastUpdate}}
    </div>
    <div class="row-info">
      {{client.alarm}}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "ClientCard",
  props: {
    clients: Array
  }
}
</script>
<style scoped>
.header-row {
  display: flex;
  justify-content: center;
}

h4 {
  margin-right: 77%;
  margin-bottom: 2%;
  margin-left: 1%;
  margin-top: 1%;
}

.row {
  display: flex;
  flex-direction: row;
}

.row-header {
  display: flex;
  justify-content: center;
  justify-items: center;
  border: 1px solid #dedddc;
  background-color: #fff;
  align-items: center;
  width: 145px;
}

.row-info {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border: 1px solid #dedddc;
  background-color: #fff;
  width: 145px;
  height: 50px;
}
</style>
