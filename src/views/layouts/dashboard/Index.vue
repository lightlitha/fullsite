<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <span
          v-for="side in sidelinks"
          :key="side.name"
        >
          <black-dropdown
            v-if="side.children"
            tag="li"
            :menu-on-right="!$rtl.isRTL"
            title-tag="a"
            class="nav-item"
            :title-classes="'p-0'"
          >
            <a
              slot="title"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <i :class="side.icon" />
              <p class="">
                {{ side.name }}
              </p>
            </a>
            <li
              v-for="item in side.children"
              :key="item.name"
              class="nav-link p-0 m-0"
            >
              <router-link
                :to="item.url"
                class="nav-item dropdown-item text-dark m-0"
              >
                {{ item.name }}
              </router-link>
            </li>
          </black-dropdown>
          <sidebar-link
            v-else
            :to="side.url"
            :name="side.name"
            :icon="side.icon"
          />
        </span>
      </template>
    </side-bar>
    <mobile-menu />
    <!-- Does not seem to make any impact  -->
    <div class="main-panel">
      <top-navbar />

      <dashboard-content @click.native="toggleSidebar" />

      <content-footer />
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu,
    },

    data: () => ({
      sidelinks: [
        {
          url: '/a/dashboard',
          name: 'Dashboard',
          icon: 'mdi mdi-view-dashboard',
        },
        {
          name: 'Sales',
          icon: 'mdi mdi-sale',
          children: [
            {
              url: '/a/orders',
              name: 'Orders',
              icon: 'mdi mdi-room-service',
            },
            {
              url: '/a/shipments',
              name: 'Shipments',
              icon: 'mdi mdi-truck',
            },
            {
              url: '/a/invoices',
              name: 'Invoices',
              icon: 'mdi mdi-file-document',
            },
            {
              url: '/a/refunds',
              name: 'Refunds',
              icon: 'mdi mdi-cash-refund',
            },
          ],
        },
        {
          url: '/maps',
          name: 'Maps',
          icon: 'tim-icons icon-pin',
        },
        {
          url: '/notifications',
          name: 'Notifications',
          icon: 'tim-icons icon-bell-55',
        },
        {
          url: '/profile',
          name: 'Profile',
          icon: 'tim-icons icon-single-02',
        },
        {
          url: '/table-list',
          name: 'Tables',
          icon: 'tim-icons icon-puzzle-10',
        },
        {
          url: '/typography',
          name: 'Typography',
          icon: 'tim-icons icon-align-center',
        },
      ],
    }),

    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
    },
  }
</script>
