<template>
  <v-navigation-drawer height="100%" id="app-drawer" v-model="inputValue" app dark persistent mobile-breakpoint="991" width="260" absolute>
    <v-img :src="image" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-list nav dense>
          <v-list-item to="/">
            <v-list-item-avatar color="grey">
              <v-img :src="logo" height="64" contain />
            </v-list-item-avatar>
            <v-list-item-title class="title">
              Moviecrashhh Admin Dashboard
            </v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.to" :active-class="color">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-html="link.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: require('@/assets/img/redditicon.png'),
    links: [{
        to: '/dashboard/statistics',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard',
      },
      {
        to: '/dashboard/user-profile',
        icon: 'mdi-account',
        text: 'User Profile',
      },
      {
        to: '/dashboard/user-tables',
        icon: 'mdi-table-edit',
        text: 'Users Table',
      },
      {
        to: '/dashboard/article-writing',
        icon: 'mdi-newspaper',
        text: 'Article Writing',
      },
      {
        to: '/dashboard/article-review',
        icon: 'mdi-check',
        text: 'Article Review',
      },
      {
        to: '/dashboard/notifications',
        icon: 'mdi-bell',
        text: 'Notifications',
      }
    ],
    responsive: false,
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get() {
        return this.$store.state.app.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    },
    items() {
      return this.$t('Layout.View.items')
    }
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
          this.responsive = true
      } else {
          this.responsive = false
      }
    }
  }
}
</script>
<style lang="scss">
#app-drawer {
    .v-list__item {
        border-radius: 4px;

        &--buy {
            margin-top: auto;
            margin-bottom: 17px;
        }
    }

    .v-image__image--contain {
        top: 9px;
        height: 60%;
    }

    .search-input {
        margin-bottom: 30px !important;
        padding-left: 15px;
        padding-right: 15px;
    }
}
</style>