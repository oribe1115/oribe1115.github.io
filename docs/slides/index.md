<script setup>
import SlidePageInfoList from '../../components/SlidePageInfoList.vue'
import { data } from '../../components/composables/slidePageJP.data.ts'

const filteredData = data.filter((item) => item.title)
</script>


# Slides

<SlidePageInfoList :slidePageInfos="filteredData" />