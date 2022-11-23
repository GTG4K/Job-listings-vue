<template>
  <the-header></the-header>
  <main>
    <div class="active-filters" v-if="activeFilters.length > 0">
      <base-tag
        v-for="filter in activeFilters"
        :key="filter"
        :value="filter"
        theme="dark"
        type="block"
        :select="true"
        @click="removeFilter(filter)"
      ></base-tag>
    </div>
    <div class="job-listings">
      <job-listing
        v-for="job in listings"
        :key="job.id"
        :job="job"
        @addFilter="addFilter"
      ></job-listing>
    </div>
  </main>
</template>

<script>
import JobListing from './components/JobListing.vue';
import TheHeader from './components/TheHeader.vue';
export default {
  components: {
    TheHeader,
    JobListing,
  },
  data() {
    return {
      activeFilters: [],
    };
  },
  computed: {
    listings() {
      const listings = this.$store.getters.getListings;

      if (this.activeFilters.length === 0) {
        return listings;
      } else {
        const filteredListing = [];
        let filterBy = [];
        let allFiltersPassed;
        for (let i = 0; i < listings.length; i++) {
          filterBy = [
            listings[i].role,
            listings[i].level,
            listings[i].location,
            ...listings[i].languages,
            ...listings[i].tools,
          ];
          allFiltersPassed = true;
          for (let j = 0; j < this.activeFilters.length; j++) {
            if (!filterBy.includes(this.activeFilters[j])) {
              allFiltersPassed = false;
            }
          }
          if (allFiltersPassed) {
            filteredListing.push(listings[i]);
          }
        }
        return filteredListing;
      }
    },
  },
  methods: {
    removeFilter(recievedFilter) {
      const filterIndex = this.activeFilters.findIndex(
        (filter) => filter === recievedFilter
      );
      this.activeFilters.splice(filterIndex, 1);
    },
    addFilter(recievedFilter) {
      console.lo;
      if (!this.activeFilters.find((filter) => filter === recievedFilter)) {
        this.activeFilters.push(recievedFilter);
      } else {
        console.log(`${recievedFilter} is already being filtered`);
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap');

:root {
  --background-dark: #1a1a1a;
  --item-bg-dark-100: #242424;
  --item-bg-dark-200: #3d3d3d;
  --item-bg-dark-300: #272727;
  --font-100: 'Nunito', sans-serif;

  --color-divider: rgba(84, 84, 84, 0.5);

  --text-light-100: #f0f0f0;
  --text-light-200: #dadada;
  --text-light-300: #c5c5c5;
  --color-main-100: #35495e;
  --color-main-200: #263442;
  --color-main-300: #1a242e;
  --color-accent-100: #42b883;
  --color-accent-200: #359469;
  --color-accent-300: #2b7755;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-100);
  transition: 0.2s;
}

body {
  background: var(--background-dark);
}

main {
  margin: 25px 0 0 0;
}
.active-filters {
  width: 80%;
  margin: 25px auto;

  display: flex;
  gap: 20px;
}

.job-listings {
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media only screen and (max-width: 375px) {
  .job-listings {
    width: 95%;
  }
}
</style>
