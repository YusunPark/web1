<template>
  <div>
    <Title message="Todo List"></Title>
    <AddTodo />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  components: {
    Title,
    AddTodo,
  },
};
</script>

<style>
</style>