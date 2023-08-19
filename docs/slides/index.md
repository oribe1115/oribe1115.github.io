<script setup>
import SlidePageInfoList from '../.vitepress/theme/components//SlidePageInfoList.vue'
import { data } from '../.vitepress/theme/components/composables/slidePageJP.data.ts'

const filteredData = data.filter((item) => item.title)
</script>


# Slides

<SlidePageInfoList :slidePageInfos="filteredData" />