<template>
  <v-content>
    <div class="col-lg-4 col-md-6 mt-3 ml-auto mr-auto">
      <black-card class="card-register card-white">
        <template slot="header">
          <h1 class="card-title">
            Success
          </h1>
        </template>
        Please verify your email. if you cannot find the email, look in your
        spam
        <black-button
          slot="footer"
          type="primary"
          round
          block
          size="lg"
          @click="login"
        >
          Done
        </black-button>
      </black-card>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'VerifyEmail',
    methods: {
      login () {
        this.$router.push({ name: 'Login' }, onAbort => {})
      },
    },
  }
</script>

<style></style>
