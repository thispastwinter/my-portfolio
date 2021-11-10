<template>
  <div :style="spacingStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Spacing } from "@/types"
import { getSpacingStyle } from "@/utils"

type Props = {
  pt?: Spacing
  pb?: Spacing
  pr?: Spacing
  pl?: Spacing
  py?: Spacing
  px?: Spacing
}

const props = defineProps<Props>()

const spacingStyle = getSpacingStyle(props)
</script>
