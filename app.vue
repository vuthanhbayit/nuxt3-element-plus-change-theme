<template>
  <div>
    <el-input></el-input>
    <el-button>Button</el-button>
    <el-color-picker v-model="color"></el-color-picker>
    {{ color }}
  </div>
</template>

<script lang="ts" setup>
import { generateColors } from "~/utils";
const primaryProperty = '--el-color-primary'

const color = ref('')

const setRootProperty = (property: string, value: string) => {
  document.documentElement.style.setProperty(property, value)
}

watch(color, value => {
  setRootProperty(primaryProperty, value)

  const tintColors = generateColors(value)

  Object.entries(tintColors).forEach(([key, val]) => {
    setRootProperty(primaryProperty  + '-' + key, val)
  })

})
</script>
