<template>
  <Header />
  <Spacer px="3">
      <Spacer pb="3" pt="4">
        <div class="flex items-center">
          <img class="rounded-full" width="500em" src="../assets/images/me.jpg" />
          <Spacer pl="4">
            <Typography variant="title3">About Me</Typography>
            <Spacer pt="3">
              <Typography>
                A front-end developer specializing in React-Native, GraphQL, and
                Typescript. I've been developing for nearly 3 years and have a strong
                passion for learning. I'll never be the best, because this industry is
                constantly changing, but I'll never get stuck, because I do whatever
                it takes to get to a solution.
              </Typography>
            </Spacer>
            <Spacer py="3">
              <Typography>
                A front-end developer specializing in React-Native, GraphQL, and
                Typescript. I've been developing for nearly 3 years and have a strong
                passion for learning. I'll never be the best, because this industry is
                constantly changing, but I'll never get stuck, because I do whatever
                it takes to get to a solution.
              </Typography>
            </Spacer>
            <Typography>
              A front-end developer specializing in React-Native, GraphQL, and
              Typescript. I've been developing for nearly 3 years and have a strong
              passion for learning. I'll never be the best, because this industry is
              constantly changing, but I'll never get stuck, because I do whatever
              it takes to get to a solution.
            </Typography>
          </Spacer>
        </div>
      </Spacer>
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
