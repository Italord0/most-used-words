<template>
  <div class="card">
    <span class="name"> {{ name }} </span>
    <span class="amount"> {{ amount }} </span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>


<style scoped>
.card {
  margin: 10px;
  border-radius: 100px;
  padding: 5px;
  background-color: rgb(119, 52, 243);
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
}
.card .name {
  margin: 10px;
}
.card .amount {
  color: rgb(119, 52, 243);
  margin: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 300px;
  display: flex;
  align-items: center;
}
</style>