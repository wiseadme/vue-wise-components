import VueCard from './VueCard'
// Helpers
import { createSimpleFunctional } from '@/helpers'

const VueCardActions = createSimpleFunctional('vue-card__actions')
const VueCardSubtitle = createSimpleFunctional('vue-card__subtitle')
const VueCardContent = createSimpleFunctional('vue-card__content')
const VueCardTitle = createSimpleFunctional('vue-card__title')

export {
  VueCard,
  VueCardActions,
  VueCardSubtitle,
  VueCardContent,
  VueCardTitle
}
export default VueCard
