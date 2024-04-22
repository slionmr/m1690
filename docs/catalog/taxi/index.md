---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>

# Службы пассажирского и грузового такси
Каталог служб такси по городу Макеевка и Донецк. <br/>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
