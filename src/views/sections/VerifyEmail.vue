<template>
  <base-section id="pro-features">
    <base-section-heading title="Email Verification">
      Verify your email address.
    </base-section-heading>
    <v-container fluid>
      <v-row
        class="flex"
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
        >
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card flat>
                  <v-card-title class="headline">
                    Verify Email
                  </v-card-title>

                  <v-card-subtitle>
                    Successfully created your account. Please verify your email.
                    <br>
                    if you cannot find the email, look in your spam
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      text
                      :to="'/login'"
                    >
                      Login
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'VerifyEmail',
  }
</script>
