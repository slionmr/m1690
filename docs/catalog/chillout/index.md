---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>

# Куда пойти?
Каталог сервсиов для автомобилистов

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


 









 
