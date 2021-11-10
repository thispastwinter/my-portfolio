<template>
  <div class="bg-primary">
    <Spacer pl="3" py="3">
      <Typography color="mintCream" variant="title1">Justin Klaas</Typography>
    </Spacer>
  </div>
  <Spacer px="3">
    <div class="bio-wrapper">
      <Spacer py="3">
        <Typography>
          I'm currently an application developer working at Crema (a product
          agency) in Kansas City. I'm currently an application developer working
          at Crema (a product agency) in Kansas City. I'm currently an
          application developer working at Crema (a product agency) in Kansas
          City. I'm currently an application developer working at Crema (a
          product agency) in Kansas City.
        </Typography>
      </Spacer>
    </div>
    <Button variant="secondary" @click="onClick" title="I'm a button" />
  </Spacer>
</template>

<script setup lang="ts">
const onClick = () => {
  alert("hello world")
}
</script>

<style scoped>
.bio-wrapper {
  max-width: 40rem;
  width: "100%";
}
</style>
