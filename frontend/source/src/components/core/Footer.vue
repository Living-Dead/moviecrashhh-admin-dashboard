<template>
  <v-footer
    padless
    dark
    style="margin-left: 260px;"
  >
    <v-row
      justify="center"
      no-gutters
    >
    <v-col class="text-center">
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-col>
      <v-col
        class="py-4 text-center white--text"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Team',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>
