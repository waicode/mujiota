import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('dateFormatted', (dateStr) => {
  const date = new Date(dateStr)
  return format(date, 'yyyy-MM-dd')
})
