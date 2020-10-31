import { Model } from './Model'

export interface Habit extends Model {
  createdAt: string
  name: string
  habitType: 'improve' | 'diminish'
  periodicity: 'daily' | 'weekly' | 'monthly' | 'yearly'
  goal: number
}
