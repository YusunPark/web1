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
      <li class="list-group-item" v-for="(todo, index) in todos">
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
              <a href="#" @click="deleteTodo(todo)">🧹 Delete</a>
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
      todos: [],
      change_name: "",
    };
  },
  methods: {
    doing(i) {
      // i 인덱스 부터 1개를 삭제한다.
      this.todos.splice(i, 1);
    },
    done(i) {
      // i 인덱스 부터 1개를 삭제한다.
      this.todos.splice(i, 1);
    },
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
        // this.todos.push({name:name});

        // 맨앞에 todo 추가
        this.todos.splice(0, 0, { name: name });
        this.name = null;
      }
    },
  },
};
</script>