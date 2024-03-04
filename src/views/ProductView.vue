<template>
  <h2>{{product.title}}</h2>
</template>

<script>
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct(id) {
      axios(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
  },
};
</script>
