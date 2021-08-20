<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-calendar-month-outline',
          title: 'Appointments / Roster',
          text:
            'Efficiently sort your employee roster or allow Phiscus to do it for you.',
        },
        {
          icon: 'mdi-cloud-lock-outline',
          title: '24/7 Cloud Access',
          text:
            'Never miss out on your business progress. Access information with any device and anywhere in the world',
        },
        {
          icon: 'mdi-clock-fast',
          title: 'Real-Time Activities',
          text:
            'Get real time data. See how fast you are improving and how busy you are today.',
        },
        {
          icon: 'mdi-moon-full',
          title: 'Team Management',
          text:
            'Effortless management of your teams. Deliver in time, unite and become one in goal.',
        },
      ],
    }),
  }
</script>
