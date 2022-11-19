import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

//import components
import BaseTag from "./components/base/BaseTag.vue";

const store = createStore({
  state() {
    return {
      listings: [
        {
          id: 1,
          company: "Photosnap",
          logo: "DokiAeedz",
          new: true,
          featured: true,
          position: "Senior Frontend Developer",
          role: "Frontend",
          level: "Senior",
          postedAt: "1d ago",
          contract: "Full Time",
          location: "USA Only",
          languages: ["HTML", "CSS", "JavaScript"],
          tools: [],
        },
        {
          id: 2,
          company: "Manage",
          logo: "GlitchAeedz",
          new: true,
          featured: true,
          position: "Fullstack Developer",
          role: "Fullstack",
          level: "Midweight",
          postedAt: "1d ago",
          contract: "Part Time",
          location: "Remote",
          languages: ["Python"],
          tools: ["React"],
        },
        {
          id: 3,
          company: "Account",
          logo: "BinaryAeedz",
          new: true,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "2d ago",
          contract: "Part Time",
          location: "USA Only",
          languages: ["JavaScript"],
          tools: ["React", "Sass"],
        },
        {
          id: 4,
          company: "MyHome",
          logo: "DokiAeedz",
          new: false,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "5d ago",
          contract: "Contract",
          location: "USA Only",
          languages: ["CSS", "JavaScript"],
          tools: [],
        },
        {
          id: 5,
          company: "Loop Studios",
          logo: "NormalAeedz",
          new: false,
          featured: false,
          position: "Software Engineer",
          role: "Fullstack",
          level: "Midweight",
          postedAt: "1w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["JavaScript"],
          tools: ["Ruby", "Sass"],
        },
        {
          id: 6,
          company: "FaceIt",
          logo: "GlitchAeedz",
          new: false,
          featured: false,
          position: "Junior Backend Developer",
          role: "Backend",
          level: "Junior",
          postedAt: "2w ago",
          contract: "Full Time",
          location: "UK Only",
          languages: ["Ruby"],
          tools: ["RoR"],
        },
        {
          id: 7,
          company: "Shortly",
          logo: "BinaryAeedz",
          new: false,
          featured: false,
          position: "Junior Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "2w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["HTML", "JavaScript"],
          tools: ["Sass"],
        },
        {
          id: 8,
          company: "Insure",
          logo: "DokiAeedz",
          new: false,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "2w ago",
          contract: "Full Time",
          location: "USA Only",
          languages: ["JavaScript"],
          tools: ["Vue", "Sass"],
        },
        {
          id: 9,
          company: "Eyecam Co.",
          logo: "BinaryAeedz",
          new: false,
          featured: false,
          position: "Full Stack Engineer",
          role: "Fullstack",
          level: "Midweight",
          postedAt: "3w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["JavaScript", "Python"],
          tools: ["Django"],
        },
        {
          id: 10,
          company: "The Air Filter Company",
          logo: "NormalAeedz",
          new: false,
          featured: false,
          position: "Front-end Dev",
          role: "Frontend",
          level: "Junior",
          postedAt: "1mo ago",
          contract: "Part Time",
          location: "Worldwide",
          languages: ["JavaScript"],
          tools: ["React", "Sass"],
        },
      ],
      filterBy: [],
    };
  },
  mutations: {
    addFilter(state, payload) {
      if (!state.filterBy.find((filter) => filter === payload.value)) {
        state.filterBy.push(payload.value);
      } else {
        console.log(`${payload.value} is already being filtered`);
      }
    },
    removeFilter(state, payload) {
      const filterIndex = state.filterBy.findIndex((filter) => filter === payload.value);
      state.filterBy.splice(filterIndex, 1);
    },
  },
  getters: {
    getListings(state) {
      return state.listings;
    },
    getFilter(state) {
      return state.filterBy;
    },
  },
  actions: {
    addFilter(context, payload) {
      context.commit("addFilter", payload);
    },
    removeFilter(context, payload) {
      context.commit("removeFilter", payload);
    },
  },
});

const app = createApp(App);
app.use(store);

app.component("base-tag", BaseTag);

app.mount("#app");
