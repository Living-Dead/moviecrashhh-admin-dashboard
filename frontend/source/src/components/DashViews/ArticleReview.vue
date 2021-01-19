<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12 sm12 md10 lg10>
        <material-card :color="$store.state.app.color" title="Cikk ellenőrzése" text="--- cikk ellenőrzése ---">
          <v-fade-transition mode="out-in">
            <v-row class="pt-2 pb-2">
              <v-col cols="4">
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px">
                    <v-card-title> test </v-card-title>
                  </v-img>

                  <v-card-actions>
                    <v-btn icon>
                      <v-icon color="black">mdi-comment</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon :color="$store.state.app.color">mdi-eye</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon :color="$store.state.app.color">mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon color="red">mdi-alert-circle</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-fade-transition>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'ArticleReview',
};
</script>
