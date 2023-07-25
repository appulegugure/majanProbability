<script setup>
const FULLTILE = useTest()
</script>
<template>
  <div>
    <h1>総数{{ FULLTILE.length }}</h1>
    <pre>
      {{ FULLTILE }}
    </pre>
  </div>
</template>
