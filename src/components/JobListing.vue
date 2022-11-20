<template>
  <div v-if="filterPassed" class="listing-container">
    <div class="details">
      <img :src="getImgUrl()" alt="" />
      <div class="details-container">
        <div class="company-details">
          <h2>{{ job.company }}</h2>
          <base-tag v-if="job.new" theme="vue" type="round">NEW!</base-tag>
          <base-tag v-if="job.featured" theme="dark" type="round">FEATURED</base-tag>
        </div>
        <h1>{{ job.position }}</h1>
        <div class="listing-details">
          <span>{{ job.postedAt }}</span>
          <span>{{ job.contract }}</span>
          <span>{{ job.location }}</span>
        </div>
      </div>
    </div>
    <div class="filters">
      <base-tag
        v-for="filter in filters"
        :key="filter"
        :value="filter"
        theme="dark"
        type="block"
        :select="true"
        @click="addFilter(filter)"
        >{{ filter }}</base-tag
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["job"],
  data() {
    return {
      filterPassed: false,
      filters: [],
    };
  },
  watch: {
    watchFilter() {
      console.log(this.$store.getters.getFilter);
    },
  },
  methods: {
    getImgUrl() {
      return require("@/assets/" + this.job.logo + ".png");
    },
    addFilter(filter) {
      this.$store.dispatch("addFilter", { value: filter });
    },
  },
  created() {
    this.filters.push(this.job.role);
    this.filters.push(this.job.level);
    this.filters.push(...this.job.languages);
    this.filters.push(...this.job.tools);

    const activeFilters = this.$store.getters.getFilter;

    if (activeFilters.length === 0) {
      this.filterPassed = true;
    } else {
      for (let i = 0; i < this.filters.length; i++) {
        if (activeFilters.find((filter) => filter === this.filters[i])) {
          this.filterPassed = true;
        }
      }
    }
  },
};
</script>

<style scoped>
.listing-container {
  padding: 20px 35px;
  background: var(--item-bg-dark-100);
  position: relative;

  display: flex;
  border-radius: 10px;
  height: fit-content;
  border-left: solid 0px;
}
.listing-container:hover {
  border-left: solid 5px;
  border-color: var(--color-accent-100);
}
img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
h1 {
  font-size: 26px;
  font-weight: 500;
  color: var(--text-light-200);
}
.listing-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.details {
  display: flex;
  gap: 35px;
  align-items: center;
  height: 120px;
}
.details-container {
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
.company-details {
  display: flex;
  align-items: center;
  gap: 12px;
}
.company-details h2 {
  font-size: 18px;
  color: var(--color-accent-100);
  font-weight: 700;
  margin: 0 10px 0 0;
}
.listing-details {
  display: flex;
  align-items: center;
  gap: 20px;
}
.listing-details span {
  font-weight: 300;
  font-size: 16px;
  color: var(--text-light-300);
}
.filters {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
}

@media only screen and (max-width: 1100px) {
  .listing-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    margin: 15px 0 0 0;
  }

  img {
    position: absolute;
    height: 55px;
    width: 55px;
    top: 0;
    left: 20px;
    transform: translate(0, -50%);
    border-radius: 50%;
  }

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-light-200);
  }

  .company-details {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .company-details h2 {
    font-size: 18px;
    color: var(--color-accent-100);
    font-weight: 700;
  }
  .listing-details {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .filters {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
