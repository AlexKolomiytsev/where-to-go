<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-label>Where to?</ion-label>
        <CountrySelector v-model="selectedCountry" />
      </ion-toolbar>
      <ion-toolbar>
        <SearchBar v-model="searchQuery" placeholder="Type a place name" />
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-loading v-if="isLoading" message="Loading cities..."></ion-loading>
      <div v-else-if="!isLoading && cities.length">
        <CitySearchResultCard
          v-for="city in cities"
          :key="city.place_id"
          :name="city.name"
          :lat="city.lat"
          :lon="city.lon"
        />
      </div>
      <EmptyState v-else :search-query="searchQuery" />
      <ion-alert
        v-if="error"
        header="An error occurred!"
        message="Could not fetch cities. Please try again."
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonLabel,
  IonToolbar,
  IonLoading,
  IonAlert
} from '@ionic/vue'
import { ref, provide, type Ref } from 'vue'
import SearchBar from '@/shared/components/SearchBar.vue'
import CitySearchResultCard from '@/shared/components/CitySearchResultCard.vue'
import useNominatimCitiesSearch from '@/shared/hooks/useNominatimCitiesSearch'
import EmptyState from '@/pages/HomePage/components/EmptyState.vue'
import CountrySelector from '@/shared/components/CountrySelector.vue'
import { CountryCode } from '@/shared/types/CountryCode'

const searchQuery = ref('')
const selectedCountry = ref<CountryCode>(CountryCode.Thailand)

provide<Ref<CountryCode>>('selectedCountry', selectedCountry)

const { cities, isLoading, error } = useNominatimCitiesSearch(searchQuery, selectedCountry)
</script>
