<template>
  <nav
    class="navbar navbar-expand-lg navbar-absolute"
    :class="{ 'bg-white': showMenu, 'navbar-transparent': !showMenu }"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div
          class="navbar-toggle d-inline"
          :class="{ toggled: $sidebar.showSidebar }"
        >
          <button
            type="button"
            class="navbar-toggler"
            aria-label="Navbar toggle button"
            @click="toggleSidebar"
          >
            <span class="navbar-toggler-bar bar1" />
            <span class="navbar-toggler-bar bar2" />
            <span class="navbar-toggler-bar bar3" />
          </button>
        </div>
        <a
          class="navbar-brand"
          href="#pablo"
        >{{ routeName }}</a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation-index"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-bar navbar-kebab" />
        <span class="navbar-toggler-bar navbar-kebab" />
        <span class="navbar-toggler-bar navbar-kebab" />
      </button>

      <collapse-transition>
        <div
          v-show="showMenu"
          class="collapse navbar-collapse show"
        >
          <ul
            class="navbar-nav"
            :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'"
          >
            <div
              class="search-bar input-group"
              @click="searchModalVisible = true"
            >
              <!-- <input type="text" class="form-control" placeholder="Search...">
              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> -->
              <button
                id="search-button"
                class="btn btn-link"
                data-toggle="modal"
                data-target="#searchModal"
              >
                <i class="tim-icons icon-zoom-split" />
              </button>
              <!-- You can choose types of search input -->
            </div>
            <black-modal
              id="searchModal"
              :show.sync="searchModalVisible"
              class="modal-search"
              :centered="false"
              :show-close="true"
            >
              <input
                id="inlineFormInputGroup"
                slot="header"
                v-model="searchQuery"
                type="text"
                class="form-control"
                placeholder="SEARCH"
              >
            </black-modal>
            <black-dropdown
              tag="li"
              :menu-on-right="!$rtl.isRTL"
              title-tag="a"
              class="nav-item"
            >
              <a
                slot="title"
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <div class="notification d-none d-lg-block d-xl-block" />
                <i class="tim-icons icon-sound-wave" />
                <p class="d-lg-none">
                  New Notifications
                </p>
              </a>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Mike John responded to your email</a>
              </li>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >You have 5 more tasks</a>
              </li>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Your friend Michael is in town</a>
              </li>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Another notification</a>
              </li>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Another one</a>
              </li>
            </black-dropdown>
            <black-dropdown
              tag="li"
              :menu-on-right="!$rtl.isRTL"
              title-tag="a"
              class="nav-item"
              menu-classes="dropdown-navbar"
            >
              <a
                slot="title"
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <div class="photo">
                  <img src="img/anime3.png">
                </div>
                <b class="caret d-none d-lg-block d-xl-block" />
                <p class="d-lg-none">
                  Log out
                </p>
              </a>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Profile</a>
              </li>
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Settings</a>
              </li>
              <div class="dropdown-divider" />
              <li class="nav-link">
                <a
                  href="#"
                  class="nav-item dropdown-item"
                >Log out</a>
              </li>
            </black-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions'
  import BlackModal from '@/components/black/Modal'

  export default {
    components: {
      CollapseTransition,
      BlackModal,
    },
    data () {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: '',
      }
    },
    computed: {
      routeName () {
        const { name } = this.$route
        return this.capitalizeFirstLetter(name)
      },
      isRTL () {
        return this.$rtl.isRTL
      },
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      toggleMenu () {
        this.showMenu = !this.showMenu
      },
    },
  }
</script>
<style></style>
