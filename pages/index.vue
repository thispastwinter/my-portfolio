<template>
  <div class="p-4">
    <Typography variant="title1">Justin Klaas</Typography>
    <div class="bio-wrapper">
      <Spacer direction="vertical" spacing="96">
        <Typography>
          I'm currently an application developer working at Crema (a product
          agency) in Kansas City.
          I'm currently an application developer working at Crema (a product
          agency) in Kansas City.
          I'm currently an application developer working at Crema (a product
          agency) in Kansas City.
          I'm currently an application developer working at Crema (a product
          agency) in Kansas City.
        </Typography>
      </Spacer>
    </div>
    <Button variant="secondary" @click="onClick" title="I'm a button" />
  </div>
</template>

<script setup lang="ts">
const onClick = () => {
  alert("hello world")
}
</script>

<style scoped>
.bio-wrapper {
  width: 40rem;
}
</style>
