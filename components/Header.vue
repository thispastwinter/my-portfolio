<template>
  <div class="bg-mintCream border-b-2 border-paleSilver">
    <Spacer pl="3" py="3">
      <div class="flex">
        <div class="p-6" v-for="(letter, index) in firstName" :key="letter">
          <Typography :color="colors[index % colors.length]" variant="title1">
            {{ letter }}
          </Typography>
        </div>
        <Spacer px="3"></Spacer>
        <div class="p-6" v-for="(letter, index) in lastName" :key="letter">
          <Typography :color="colors[index % colors.length]" variant="title1">
            {{ letter }}
          </Typography>
        </div>
      </div>
    </Spacer>
  </div>
</template>

<script setup lang="ts">
import { Colors } from "@/types"

const colors: Partial<Colors>[] = [
  "darkBlueSky",
  "deepTaupe",
  "paleSilver",
  "primary",
  "secondary",
  "russianViolet",
  "richBlack",
]

const convertToUpperCaseArray = (str: string) => str.toUpperCase().split("")

const firstName = convertToUpperCaseArray("justin")
const lastName = convertToUpperCaseArray("klaas")
</script>
