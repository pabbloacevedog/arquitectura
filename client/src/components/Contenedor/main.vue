<template>
    <v-layout column>
      <v-flex order-xs6>
        <v-card height="auto" class='card-style mt-5' hover flat>
          <h3 class='display-1 font-weight 200 text-xs-center pt-5'>{{title}}</h3>
          <slot></slot>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
