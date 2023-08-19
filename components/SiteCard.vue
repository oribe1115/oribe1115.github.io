<script setup lang="ts">
import { TargetSiteKey } from '../data/sitecardTargets'
import { data } from './composables/ogp.data'

const props = defineProps<{
    siteKey: TargetSiteKey
}>()

</script>

<template>
  <p>Site Card: {{ data[props.siteKey] }}</p>
</template>