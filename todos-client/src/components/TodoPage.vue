<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="input-group" style="margin-bottom:10px;">
      <input
        type="text"
        class="form-control"
        placeholder="할일을 입력하세요"
        v-model="name"
        v-on:keyup.enter="createTodo(name)"
      />
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="createTodo(name)">Add</button>
      </span>
    </div>
    <ul class="list-group">
      <!-- 여러개를 선택하는 거니까 v-for  -->
      <li class="list-group-item" v-for="(todo, index) in todos" :class="todo.status">
        {{ todo.name }}
        <div class="btn-group pull-right" style="font-size:12px; line-height: 1;">
          <button
            type="button"
            class="btn-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#" @click="doing(todo)">🏃‍♀️ Doing</a>
            </li>
            <li>
              <a href="#" @click="done(todo)">🤸‍♀️ Done</a>
            </li>
            <li>
              <a href="#" @click="deleteTodo(index)">🧹 Delete</a>
            </li>
            <li>
              <a href="#">
                👩‍💻 Edit
                <input
                  type="text"
                  class="form-control"
                  placeholder="할일 수정하기"
                  v-model="change_name"
                  v-on:keyup.enter="editTodo(todo, change_name)"
                />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoPage",
  data() {
    return {
      name: null,
      change_name: null,
      todos: [],
      status: null,
    };
  },
  methods: {
    doing(todo) {
      todo.status = "doing";
    },
    done(i) {},
    editTodo(todo, change_name) {
      if (change_name != null) {
        todo.name = change_name;
      }
      this.change_name = null;
    },
    deleteTodo(i) {
      // i 인덱스 부터 1개를 삭제한다.
      this.todos.splice(i, 1);
    },
    createTodo(name) {
      if (name != null) {
        // 맨앞에 todo 추가
        this.todos.unshift({ name: name });
        this.name = null;
      }
    },
  },
};
</script>

<style>
.dropdown-menu {
  background-color: rgb(241, 247, 255);
}

.doing {
  background-color: rgb(201, 243, 201);
}

.done {
  background-color: rgb(255, 227, 227);
}
</style>