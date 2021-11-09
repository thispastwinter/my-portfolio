<template>
  <div :class="`${getDirectionLetter(direction)}-${spacing}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Spacing } from "@/types"

interface Props {
  spacing: Spacing
  direction?: "vertical" | "horizontal" | "all"
}

const getDirectionLetter = (direction: Props["direction"] = "all") => {
  switch (direction) {
    case "all":
      return "p"
    case "vertical":
      return "py"
    case "horizontal":
      return "px"
  }
}

defineProps<Props>()
</script>
