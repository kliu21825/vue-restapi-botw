import { ref } from 'vue'
import useAPI from '@/composables/useAPI'

const monsters = ref([])
const currentMonster = ref(null)
const firstLoad = ref(true)

const api = useAPI()
const page = ref(1)

const useMonsters = () => {
  const fetchMonsters = async () => {
    const { data } = await api.instance.get('/category/monsters', {
      params: {
        page: page.value,
      },
    })
    monsters.value.push(...data.data)
    page.value++
  }
  const fetchMonster = async (id) => {
    const { data } = await api.instance.get(`/entry/${id}`)
    currentMonster.value = data.data
  }

  return {
    monsters,
    fetchMonsters,
    fetchMonster,
    currentMonster,
    firstLoad,
  }
}

export default useMonsters
