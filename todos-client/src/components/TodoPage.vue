<template>
  <div class="container">
    <h2>To do List</h2>
    <button type="button" class="btn btn-delete" @click="All">delete All</button>
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
      <li class="list-group-item" v-for="(todo, index) in todos" :key="index" :class="todo.status">
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
              <a href="#"  @click="editTodo(todo, change_name)">
                👩‍💻 Edit
                <input
                  type="text"
                  class="form-control"
                  style="float:left"
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
      name: "",
      change_name: "",
      todos: [],
    };
  },
  // created() {
  //   const hi = localStorage.getItem("greeting");
  //   console.log("hi");

  //   localStorage.setItem("item1", "퇴근");
  //   this.item1 = localStorage.getItem("item1");
  // },

  // localStorage 잠시 제거
  // mounted() {
  //   let len = localStorage.length;
  //   this.index = len;
  //   for (let i = 0; i < len - 1; i++) {
  //     let todo = localStorage.getItem(`todo${i}`);
  //     this.todos.unshift(todo);
  //   }
  // },
  // watch: {
  //   index() {
  //     this.todos = [];
  //     let len = localStorage.length;
  //     for (let i = 0; i < len - 1; i++) {
  //       let todo = localStorage.getItem(`todo${i}`);
  //       this.todos.unshift(todo);
  //     }
  //   },
  // },
  methods: {
    createTodo(name) {
      if (name != false) {
        // 맨앞에 todo 추가
        // let todo = name;
        // localStorage.setItem(`todo${index}`, todo);
        this.todos.unshift({ name: name, status: "todo" });
      }
      this.name = "";
    },
    deleteTodo(i) {
      // i 인덱스 부터 1개를 삭제한다.
      this.todos.splice(i, 1);
    },
    editTodo(todo, change_name) {
      if (change_name != false) {
        todo.name = change_name;
      }
      this.change_name = "";
    },
    doing(todo) {
      if (todo.status == "doing") {
        todo.status = "todo";
      } else {
        todo.status = "doing";
      }
    },
    done(todo) {
      if (todo.status == "done") {
        todo.status = "doing";
      } else {
        todo.status = "done";
      }
    },

    All() {
      this.todos = [];
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

/* GENERAL BUTTON STYLING */

.btn-delete {
  padding: 4px 15px;
  background: #59da93;
  border: 3px solid #76ce9b;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: initial;
  margin-bottom: 3px;
  position: relative;
}

.btn-delete:hover {
  color: #59da93;
  background: #fff;
}
</style>