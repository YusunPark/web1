<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
p {
  font-size: 40px;
}
</style>