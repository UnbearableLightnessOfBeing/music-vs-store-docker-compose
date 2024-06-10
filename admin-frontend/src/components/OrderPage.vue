<script setup lang="ts">
import { OrderSingle, OrderProduct } from '../types/orders'
import { ref } from 'vue'
import api from '../../api'
import { useRoute } from 'vue-router'

const route = useRoute()

const order = ref<OrderSingle | null>(null)
const products = ref<OrderProduct[]>([])

const getOrder = async () => {
  const res = await api.get<{ order: OrderSingle, products: OrderProduct[] }>(`/orders/${route.params.id}`)
  order.value = res.data.order
  products.value = res.data.products
}
getOrder()

</script>

<template>
<div v-if="order" class="px-20 py-10 space-y-12 max-w-[1400px] mx-auto text-priamry">
  <h1 class="text-4xl">Заказ №{{ order.id }}</h1>
  <div>от {{ new Date(order.created_at.Time).toLocaleDateString('ru') }}</div>
  <div class="grid grid-cols-2 gap-x-20">
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="font-semibold text-2xl flex gap-4 items-center">
          <svg fill="currentColor" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"/></svg>
          Способ оплаты</div>
        <div>{{ order.payment_name.String }}</div>
      </div>
      <div class="h-[2px] w-full bg-hover"></div>
      <div class="space-y-2">
        <div class="font-semibold text-2xl flex gap-4 items-center">
          <svg  fill="currentColor" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>
          {{ order.delivery_name.String }}</div>
        <div>{{ order.city }}, {{ order.customer_address }}</div>
      </div>
      <div class="h-[2px] w-full bg-hover"></div>
      <div class="space-y-2">
        <div class="font-semibold text-2xl flex gap-4 items-center">
          <svg fill="currentColor" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          Получатель</div>
        <div>{{ order.customer_firstname }}</div>
        <div>{{ order.customer_email }}</div>
        <div>{{ order.customer_phone_number }}</div>
      </div>
    </div>
    <div class="bg-hover px-10 py-12 flex flex-col justify-between rounded-sm shadow-md shadow-hover">
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <div>Товары на общую сумму</div>
          <div>{{ order.price_int }}.00 руб</div>
        </div>
        <div class="flex justify-between items-center">
          <div>Доставка</div>
          <div>{{ order.delivery_name.String }}</div>
        </div>
        <div class="flex justify-between items-center">
          <div>Способ оплаты</div>
          <div>{{ order.payment_name.String }}</div>
        </div>
        <div class="flex justify-between items-center">
          <div>Стоимость доставки</div>
          <div>{{ order.delivery_price_int }}.00 руб</div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-xl font-semibold">Итого</div>
        <div class="text-xl font-semibold">{{ order.total_int }}.00 руб</div>
      </div>
    </div>
  </div>
  <div class="border border-hover shadow-md shadow-hover space-y-4 px-4 py-5">
    <div class="text-xl font-semibold">Состав заказа №{{ order.id }}</div>

    <div v-for="product in products" :key="product.name" class="px-3 py-2 grid grid-cols-[1fr_1fr] w-full">
      <div class="space-y-3">
        <div class="text-md">Наименование товара</div>
        <div class="flex gap-5 items-center">
          <div class="w-[100px]">
            <img
              v-if="product.images.length === 0"
              :src="'/assets/images/no-image.jpg'"
              class="object-cover w-full h-full"
            />
            <img
              v-else
              :src="product.images[0]"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="space-y-2">
            <div class="text-lg font-semibold">{{ product.name }}</div>
          </div>
        </div>
      </div>
      <div class="flex gap-10 justify-between">
        <div class="space-y-10">
          <div class="text-md">Количество</div>
          <div class="flex">
            {{ product.count }}
          </div>
        </div>
        <div class="space-y-10">
          <div class="text-md">Цена</div>
          <div class="font-normal">{{ product.price_int }}.00 руб</div>
        </div>
        <div class="space-y-10">
          <div class="text-md">Сумма</div>
          <div class="font-normal">{{ product.product_total }}.00 руб</div>
        </div>
      </div>
    </div>


    <div class="h-[2px] w-full bg-hover"></div>
    <div class="flex items-center justify-between">
      <div class="font-semibold">Товаров: {{ order.product_count }}</div>
      <div class="font-semibold">Итого: {{ order.price_int }}.00 руб</div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
