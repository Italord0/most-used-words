<template>
  <v-container fluid>
    <v-form>
      <v-file-input>
        
      </v-file-input>
    </v-form>
    <div class="cards">
      <WordCard v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>

import WordCard from './WordCard.vue'

export default {

  components : { WordCard },

  data: function () {
    return {
      groupedWords: [
        { name: "you", amount: 900 },
        { name: "he", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 50000 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
        { name: "i", amount: 850 },
      ],
    };
  },
};
</script>

<style>
.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
</style>