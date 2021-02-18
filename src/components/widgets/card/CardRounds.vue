<template>
  <v-card color="#E1F5FE">
    <v-card-title>
      <span>Input your round count.</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-select 
              v-model="state.rounds"
              :items="state.roundsItems"></v-select>
          </v-col>        
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        dark
        depressed
        color="#43B581"
        @click="setRounds">NEXT</v-btn>
      <v-btn
        dark
        depressed
        color="#FF5252"
        @click="cancel">CANCEL</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, } from '@vue/composition-api'

declare interface RoundsItem {
  text: string;
  value: number;
}

export default defineComponent({
  
  setup(props, context) {

    const state = reactive<{
      rounds: number;
      roundsItems: RoundsItem[],
    }>({
      rounds: 2,
      roundsItems: [
        {
          text: '5',
          value: 10,
        },
        {
          text: '10',
          value: 10,
        },
        {
          text: '15',
          value: 15,
        },
        {
          text: '20',
          value: 20,
        },              
      ]
    })

    function setRounds(): void {
      context.emit('setRounds', state.rounds)
    }

    function cancel(): void {
      context.emit('cancel')
    }

    return {
      state,
      setRounds,
      cancel,
    }
  }
})
</script>

<style scoped>

</style>