<template>
  <ion-page>
    <BaseHeader label="Where to?">
      <template #primary-toolbar-tools>
        <CountrySelectorWithCustomInterface slot="end" v-model="selectedCountry" />
      </template>
      <template #secondary-toolbar>
        <SearchBar v-model="searchQuery" placeholder="Type a place name" />
      </template>
    </BaseHeader>
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
import { IonContent, IonPage, IonLoading, IonAlert } from '@ionic/vue'
import { ref, provide, type Ref } from 'vue'
import SearchBar from '@/shared/components/SearchBar.vue'
import CitySearchResultCard from '@/shared/components/CitySearchResultCard.vue'
import useNominatimCitiesSearch from '@/shared/hooks/useNominatimCitiesSearch'
import EmptyState from '@/pages/HomePage/components/EmptyState.vue'
import { CountryCode } from '@/shared/types/CountryCode'
import BaseHeader from '@/shared/components/BaseHeader.vue'
import CountrySelectorWithCustomInterface from '@/shared/components/CountrySelectorWithCustomInterface/CountrySelectorWithCustomInterface.vue'
import CountrySelector from '@/shared/components/CountrySelector.vue'

const searchQuery = ref('')
const selectedCountry = ref<CountryCode>(CountryCode.Thailand)

provide<Ref<CountryCode>>('selectedCountry', selectedCountry)

const { cities, isLoading, error } = useNominatimCitiesSearch(searchQuery, selectedCountry)
</script>
