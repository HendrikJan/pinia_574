<template>
  <div>
    <div v-if="invitesStore.loading">Loading...</div>
    <ul>
      <li v-for="invite in invitesStore.invites">{{ invite.name }}</li>
    </ul>
  </div>
</template>

<script>
import { useInvitesStore } from '@/store/invitesStore'
import { onMounted, useFetch, useContext, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios, pinia } = useContext()
    const invitesStore = useInvitesStore(pinia)

    onMounted(() => {
      invitesStore.loading = true
      setTimeout(() => {
        invitesStore.loading = false
        invitesStore.invites.push({id: 2, name: "Mary"})
      }, 1000)
    })

    // !!! If I uncomment this empty useFetch, I get the error: Converting circular structure to JSON
    useFetch(async () => {
    })

    return {
      invitesStore,
    }
  },
})
</script>
