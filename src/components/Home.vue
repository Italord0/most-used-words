<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Select the files to scan"
        prepend-icon="mdi-file-multiple"
        multiple
        chips
        v-model="files"
      >
      </v-file-input>
      <v-btn text color="#FFFF" rounded class="btn-scan" @click="processFiles">
        Scan
      </v-btn>
    </v-form>
    <div class="cards">
      <WordCard
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import WordCard from "./WordCard.vue";
import { ipcRenderer } from "electron";

export default {
  components: { WordCard },

  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processFiles() {
      const paths = this.files.map(f => f.path);
      ipcRenderer.send("process-files", paths);
      ipcRenderer.on("process-files", (event, resp) => {
        this.groupedWords = resp;
        console.log(resp);
      });
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-scan {
  width: 100%;
  background-color: rgb(119, 52, 243);
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>