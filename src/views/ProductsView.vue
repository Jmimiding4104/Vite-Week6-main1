<template>
  <div class="container">
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-4">
        <div class="card" style="width: 18rem">
          <img
            :src="product.imageUrl"
            class="card-img-top"
            :alt="product.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <a href="#" class="btn btn-primary">加入購物車</a>
            <RouterLink :to="`/products/${product.id}`">
              <a class="btn btn-warning mx-4">查看細節</a>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      axios(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          const { products } = res.data;
          this.products = products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
