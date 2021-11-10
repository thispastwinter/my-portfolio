<template>
  <p :style="getTypographyStyle({color, variant})"><slot></slot></p>
</template>

<script setup lang="ts">
import { Colors, TypeStyles } from '@/types'

const { colors } = useTheme()

const typeStyles = useTypeStyles()

interface Props {
  variant?: TypeStyles
  color?: Colors
}

defineProps<Props>()

const getTypographyStyle = ({ color = "richBlack", variant = "regular" }: Props) => {
  return {
    ...typeStyles[variant],
    color: colors[color],
  }
}

</script>

