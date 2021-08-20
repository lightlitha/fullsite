<template>
  <base-section id="pro-features">
    <v-img
      :src="require('@/assets/logo.svg')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Feature Comparison">
      To fulfil your business needs you can make a selection that's just right
      for you and just right for your budget.
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="body-1 font-weight-bold text-center">
                  Free
                </th>
                <th class="body-1 font-weight-bold text-center">
                  Standard
                </th>
                <th class="body-1 font-weight-bold text-center">
                  Premium
                </th>
              </tr>
            </thead>

            <tbody class="body-1">
              <tr
                v-for="([name, one, two, three], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof three === 'boolean'">
                    <v-icon :color="three ? 'success' : 'error'">
                      mdi-{{ three ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ three }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Stock Management', true, true, true],
        ['In-Store POS', true, true, true],
        ['Revenue Management', false, true, true],
        ['Reports', false, true, true],
        ['E-Commerce', false, true, true],
        ['Multipay Methods', false, true, true],
        ['Stock Transfer Order (STO)', false, false, true],
        ['Customer Management', false, false, true],
        ['Employee Management', false, false, true],
        ['Employee Rating', false, false, true],
        ['Payrolls', false, false, true],
        ['Roster/Schedule', false, false, true],
        ['Orders & Vendors', false, false, true],
        ['Tips & Predictions', false, false, true],
        ['Multi-Language', true, true, true],
      ],
    }),
  }
</script>
