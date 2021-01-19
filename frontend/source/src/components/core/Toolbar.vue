<template>
  <v-app-bar id="core-toolbar"
    app
    dark
    style="background: #424242;"
    flat
    prominent
    height="60">
    <v-flex align-center layout py-3>
      <div class="v-toolbar-title">
        <v-toolbar-title :class="`font-weight-light ${$store.state.app.color}--text`">
          <v-btn
            v-if="responsive"
            class="default v-btn--simple"
            icon
            @click.stop="onClickBtn">
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
          <span v-html="$route.meta.name"></span>
        </v-toolbar-title>
      </div>
    </v-flex>

    <v-spacer/>
    <v-toolbar-items class="mt-n1">
      <v-flex align-center layout py-2>
        <router-link
          v-ripple
          class="toolbar-items"
          to="/">
          <v-icon color>mdi-home</v-icon>
        </router-link>
        <v-menu
          bottom
          left
          content-class
          offset-y
          transition="slide-y-transition">
          <router-link
            v-ripple
            slot="activator"
            class="toolbar-items"
            to="/dashboard/notifications">
            <v-badge
              color="error"
              overlap>
              <template slot="badge">{{ notifications.length }}</template>
              <v-icon color>mdi-bell</v-icon>
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                @click="onClick">
                <v-list-tile-title v-text="notification"/>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
        <router-link v-ripple
          class="toolbar-items"
          to="/dashboard/user-profile">
          <v-icon color>mdi-account</v-icon>
        </router-link>
        <v-icon class="toolbar-items" color @click="logout">mdi-power</v-icon>
      </v-flex>
    </v-toolbar-items>
  </v-app-bar>
</template>


<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, Thanos is coming',
      '5 new avengers joined the team',
      "You're now friends with Capt",
      'Another Notification',
      'Another One - Dj Khalid voice'
    ],
    title: 'Test',
    responsive: false,
    responsiveInput: false
  }),

  computed: {
    ...mapGetters(['authorized'])
  },

  watch: {
    $route (val) {
      this.title = val.meta.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    },
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
