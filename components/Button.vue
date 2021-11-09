<template>
  <button :class="getButtonClass(variant)">
    <Spacer spacing="2">
      <Typography :color="getTypographyColor(variant)">
        {{title}}
      </Typography>
    </Spacer>
  </button>
</template>

<script setup lang="ts">
import { Colors } from '@/types'

interface Props {
  title: string
  variant?: "primary" | "secondary"
}
 
defineProps<Props>()

const getButtonClass = (variant: Props["variant"] = "primary") => {
  const defaultClass = "rounded"
  switch(variant) {
    case "primary":
      return `bg-primary ${defaultClass}`
    case "secondary":
      return `bg-paleSilver ${defaultClass}`
  }
}

const getTypographyColor = (variant: Props["variant"] = "primary"): Colors  => {
  switch(variant) {
    case "primary":
      return "mintCream"
    case "secondary":
      return "richBlack"
  }
}

defineEmits(['@click'])

</script>
