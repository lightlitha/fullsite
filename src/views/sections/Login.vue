<template>
  <v-content>
    <div class="container">
      <div class="col-lg-4 col-md-6 mt-3 ml-auto mr-auto">
        <form @submit.prevent="login()">
          <black-card class="card-login card-white">
            <template slot="header">
              <h1 class="card-title">
                Log in
              </h1>
            </template>

            <div>
              <black-input
                v-model="email"
                required
                type="email"
                placeholder="Email"
              />
              <validation-error :errors="apiValidationErrors.email" />

              <black-input
                v-model="password"
                required
                placeholder="Password"
                type="password"
              />
              <validation-error :errors="apiValidationErrors.password" />
            </div>

            <div slot="footer">
              <black-button
                native-type="submit"
                type="primary"
                class="mb-3"
                size="lg"
                block
              >
                Get Started
              </black-button>
              <div class="pull-left">
                <h6>
                  <router-link
                    class="link footer-link"
                    to="/register"
                  >
                    Create Account
                  </router-link>
                </h6>
              </div>

              <div class="pull-right">
                <h6>
                  <router-link
                    class="link footer-link"
                    to="/password/reset"
                  >
                    Forgot Password?
                  </router-link>
                </h6>
              </div>
            </div>
          </black-card>
        </form>
      </div>
    </div>
  </v-content>
</template>

<script>
  import formMixin from '@/core/mixins/form-mixin'
  import ValidationError from '@/components/black/ValidationError.vue'

  export default {
    name: 'Login',
    components: {
      ValidationError,
    },
    mixins: [formMixin],
    props: {
      source: String,
    },
    data () {
      return {
        email: 'demo@phiscus.co.za',
        password: 'phiscus',
        subscribe: true,
      }
    },
    methods: {
      login () {
        this.$router.push({ name: 'Dashboard' }, onAbort => {})
      },
    },
  }
</script>

<style></style>
