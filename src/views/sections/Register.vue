<template>
  <v-content>
    <div class="col-lg-4 col-md-6 mt-3 ml-auto mr-auto">
      <form @submit.prevent="register()">
        <black-card class="card-register card-white">
          <template slot="header">
            <h1 class="card-title">
              Register
            </h1>
          </template>

          <black-input
            v-model="fname"
            required
            placeholder="First Name"
            type="text"
          />
          <validation-error :errors="apiValidationErrors.fname" />

          <black-input
            v-model="lname"
            required
            placeholder="Last Name"
            type="text"
          />
          <validation-error :errors="apiValidationErrors.lname" />

          <black-input
            v-model="email"
            required
            placeholder="Email"
            type="email"
          />
          <validation-error :errors="apiValidationErrors.email" />

          <black-input
            v-model="password"
            required
            placeholder="Password"
            type="password"
          />
          <validation-error :errors="apiValidationErrors.password" />

          <black-input
            v-model="password_confirmation"
            required
            placeholder="Confirm Password"
            type="password"
            name="Password confirmation"
          />
          <validation-error
            :errors="apiValidationErrors.password_confirmation"
          />

          <black-checkbox
            v-model="boolean"
            required
            class="text-left"
          >
            I agree to the
            <router-link
              class="link"
              to="/tnc"
            >
              terms and conditions
            </router-link>
          </black-checkbox>

          <black-button
            slot="footer"
            native-type="submit"
            type="primary"
            round
            block
            size="lg"
          >
            Get Started
          </black-button>

          <div slot="footer">
            <div class="pull-right">
              <h6>
                <router-link
                  class="link footer-link"
                  to="/login"
                >
                  Already Have Account?
                </router-link>
              </h6>
            </div>
          </div>
        </black-card>
      </form>
    </div>
  </v-content>
</template>

<script>
  import formMixin from '@/core/mixins/form-mixin'
  import ValidationError from '@/components/black/ValidationError.vue'

  export default {
    name: 'Register',
    components: {
      ValidationError,
    },
    mixins: [formMixin],
    data () {
      return {
        fname: null,
        lname: null,
        boolean: false,
        email: null,
        password: null,
        password_confirmation: null,
      }
    },
    methods: {
      register () {
        this.$router.push({ name: 'VerifyEmail' }, onAbort => {})
      },
    },
  }
</script>

<style></style>
