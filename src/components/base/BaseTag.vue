<template>
  <span v-if="!value" :class="spanType">
    <slot></slot>
  </span>
  <span v-else :class="spanType">
    {{ value }}
    <!-- <i class="fas fa-times"></i> -->
  </span>
</template>

<script>
export default {
  props: ["theme", "type", "select", "value"],
  computed: {
    spanType() {
      return {
        vue: this.theme === "vue",
        dark: this.theme === "dark",
        round: this.type === "round",
        block: this.type === "block",
        select: this.select === true,
      };
    },
  },
};
</script>

<style scoped>
span {
  padding: 2px 10px;
  font-weight: 700;
  max-width: fit-content;
  font-size: 14px;
}
.vue {
  color: var(--text-light-100);
  background: var(--color-accent-100);
}

.dark {
  color: var(--text-light-200);
  background: var(--item-bg-dark-200);
}
.dark.select:hover {
  color: var(--text-light-200);
  background: var(--color-main-100);
}

.round {
  border-radius: 20px;
}

.block {
  border-radius: 5px;
}
</style>
