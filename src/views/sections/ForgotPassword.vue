<template>
  <v-content>
    <div class="container">
      <div class="col-lg-4 col-md-6 mt-3 ml-auto mr-auto">
        <form @submit.prevent="recover()">
          <black-card class="card-login card-white">
            <template slot="header">
              <h1 class="card-title">
                Recover Password
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
            </div>

            <div slot="footer">
              <black-button
                native-type="submit"
                type="primary"
                class="mb-3"
                size="lg"
                block
              >
                Send Recover Link
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
                    to="/login"
                  >
                    Login
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
    data () {
      return {
        email: '',
      }
    },
    methods: {
      recover () {
        this.$router.push({ name: 'VerifyEmail' }, onAbort => {})
      },
    },
  }
</script>

<style></style>
