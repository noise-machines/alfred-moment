import moment from 'moment'
import alfy from 'alfy'

const input = alfy.input.trim()
const hours = moment.duration(input).asHours()
alfy.output([{
  title: `${hours} hours`,
  subtitle: 'Action this to copy the number of hours',
  arg: hours
}])
