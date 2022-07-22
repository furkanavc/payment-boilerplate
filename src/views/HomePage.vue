<script setup lang="ts">
import { ref } from "vue";
import type Todo from "@/types/Todo";
type Props = {
  addButtonText: string;
  colorBg: string;
};
const props = defineProps<Props>();
const inputVal = ref<string>("");
const isCompleted = ref<boolean>(false);
const todoArr = ref<Todo[]>([]);
const addItem = () => {
  todoArr.value?.push({
    id: Math.random(),
    text: inputVal.value,
    completed: isCompleted.value,
  });
  inputVal.value = "";
};
const makeDone = (id) => {
  todoArr.value.map((item) =>
    item.id == id ? (item.completed = true) : undefined
  );
};
const removeItem = (id) => {
  todoArr.value.map((item, index) => {
    item.id == id ? todoArr.value.splice(index, 1) : undefined;
  });
};

console.log("todoArr :>> ", todoArr);
</script>

<template>
  <div class="flex flex-col items-center w-ful">
    <h1>TODO APP</h1>
    <form @submit.prevent="addItem()">
      <input v-model="inputVal" type="text" class="w-64 h-12 border" />
      <button
        type="submit"
        class="h-12 px-12 ml-5 border"
        :style="`background-color:${props.colorBg};`"
      >
        {{ props.addButtonText }}
      </button>
    </form>
    <div v-for="item in todoArr" :key="item.id" class="flex space-x-5">
      <p
        :class="
          item.completed === true ? 'line-through text-green-500' : 'text-black'
        "
      >
        {{ item.text }}
      </p>
      <button
        @click="makeDone(item.id)"
        class="h-12 px-12 ml-5 bg-green-200 border"
      >
        DONE
      </button>
      <button
        @click="removeItem(item.id)"
        class="h-12 px-12 ml-5 bg-red-200 border"
      >
        REMOVE
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
