<script setup lang="ts">
import { icons } from 'vitepress/dist/client/theme-default/support/socialIcons'
</script>

<template>
  <div class="container">
    <div class="info">
      <div class="name">oribe</div>
      <div>
        Software Engineer
      </div>
      <div class="accounts">
        <a href="https://github.com/oribe1115" class="service-info">
          <div v-html="icons['github']" class="service-icon"></div>
          <div class="service-username">@oribe1115</div>
        </a>
        <a href="https://twitter.com/_oribe1115" class="service-info">
          <div v-html="icons['twitter']" class="service-icon"></div>
          <div class="service-username">@_oribe1115</div>
        </a>
      </div>
    </div>

    <img src="/icon.png" class="image"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  min-height: 200px;
}
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
.info {
  display: flex;
  flex: 2 1 15rem;
  flex-direction: column;
  justify-content: space-around;
}
.name {
  line-height: 40px;
  font-size: 36px;
  font-weight: 500;
}
@media (min-width: 768px) {
  .name {
    font-size: 50px;
  }
}
.accounts {
  display: flex;
  flex-wrap: wrap;
}
.service-info {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-right: 1rem;
}
.service-icon {
  width: 30px;
  color: var(--vp-c-text-1);
}
.service-icon > :deep(svg) {
  height: 24px;
  fill: currentColor;
}
.service-username {
  color: var(--vp-c-text-1);
}

.image {
  width: 150px;
  min-width: 100px;
  max-width: 35%;
  object-fit: contain;
  margin-bottom: 2rem;
}
</style>
