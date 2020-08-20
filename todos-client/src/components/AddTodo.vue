<template>
  <div class="input-group" style="margin-bottom:10px;">
    <input
      type="text"
      class="form-control"
      placeholder="{{ message }}"
      v-model="name"
      v-on:keyup.enter="createTodo(name)"
    />
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="createTodo(name)">추가</button>
    </span>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
</style>