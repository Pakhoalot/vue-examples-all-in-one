<template>
  <div class="github-commits">
    <h2>Latest Vue.js Commits</h2>
    <template v-for="branch in branches">
      <span :key="branch">
        <input type="radio" name="branch" :id="branch" :value="branch" v-model="currentBranch">
        <label :for="branch">{{ branch }}</label>
      </span>
    </template>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
      <li v-for="(record, index) in commits" :key="index">
        <a :href="record.html_url"
           target="_blank"
           class="commit">
           {{ record.sha.slice(0, 7) }}
        </a>
      - <span class="message">{{ record.commit.message | truncate }}</span><br>
      by <span class="author">
        <a :href="record.author.html_url"
           target="_blank">
           {{ record.commit.author.name }}
        </a>
      </span>
      at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
export default {
  data() {
    return {
      branches: ['dev', 'master'],
      currentBranch: 'master',
      commits: null,
    };
  },
  methods: {
    fetchData() {
      const xhr = XMLHttpRequest && new XMLHttpRequest();
      xhr.open('GET', apiURL + this.currentBranch);
      xhr.onload = () => {
        this.commits = JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
      };
      xhr.send();
    },
  },
  filters: {
    truncate(v) {
      const newline = v.indexOf('\n');
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatDate(v) {
      return v.replace(/T|Z/g, ' ');
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    currentBranch: 'fetchData',
  },
};
</script>

<style lang="less" scoped>
#demo {
  font-family: 'Helvetica', Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author, .date {
  font-weight: bold;
}
</style>
