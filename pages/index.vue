<template>
  <div>

  </div>
</template>


<script>
const runtimeConfig = useRuntimeConfig()
const projectToken = runtimeConfig.sanityProject
const sanityDataSet = runtimeConfig.sanityDataSet
import { fetchLandingPage } from '@/utility/getSanityData';

export default {
  name: 'Index',
  data() {
    return {
      data: null,
    }
  },
  async mounted() {
    const landingPage = await fetchLandingPage(projectToken, sanityDataSet, "landing_page");
    this.data = landingPage;

    landingPage.forEach(element => {
      console.log(element.content);
    });

  }
}
</script>
