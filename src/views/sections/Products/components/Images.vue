<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-file-input
          label="File input"
          filled
          prepend-icon="mdi-camera"
        />
      </v-col>
      <v-col
        v-for="i in 6"
        :key="i"
        cols="12"
        md="4"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
          aspect-ratio="1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProductImages',
  }
</script>
