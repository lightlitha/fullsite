<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card flat>
            <v-card-text>
              <v-form>
                <v-text-field
                  name="firstname"
                  label="First Name"
                  type="text"
                />
                <v-text-field
                  name="lastname"
                  label="Last Name"
                  type="text"
                />
                <v-text-field
                  name="login"
                  label="E-Mail"
                  type="text"
                />
                <v-text-field
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                to="/verify-email"
              >
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Login',
    props: {
      source: String,
    },
  }
</script>

<style></style>
