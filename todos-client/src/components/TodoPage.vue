<template>
  <div class="container">
    <h2>Todo List</h2>
    <button @click="All">delete All</button>
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
      <li class="list-group-item" v-for="(todo, index) in todos" :key="index" :class={status}>
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
      index: 0,
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
    createTodo(name, index) {
      if (name != null) {
        // 맨앞에 todo 추가
        // let todo = name;
        // localStorage.setItem(`todo${index}`, todo);
        this.todos.unshift({ name: name, status: "todo" });

        this.name = null;
        this.index += 1;
      }
    },
    deleteTodo(i) {
      // i 인덱스 부터 1개를 삭제한다.
      this.todos.splice(i, 1);
    },
    editTodo(todo, change_name) {
      if (change_name != null) {
        todo.name = change_name;
      }
      this.change_name = null;
    },
    doing(todo) {
      if(todo.status == "doing"){
        todo.status = "todo"
      }
      else{
      todo.status = "doing";
      }
    },
    done(i) {},
    
    
    All() {
      localStorage.clear();
      this.index = 0;
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