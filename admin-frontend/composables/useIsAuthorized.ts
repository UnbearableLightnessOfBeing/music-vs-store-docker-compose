import { ref } from 'vue'

const isAuthorized = ref(true)

export const useIsAuthorized = () => {
  return {
    isAuthorized
  }
}
