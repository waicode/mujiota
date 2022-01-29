// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns'

Vue.filter('dateFormatted', (dateStr: string) => {
  const date = new Date(dateStr)
  return format(date, 'yyyy-MM-dd')
})
