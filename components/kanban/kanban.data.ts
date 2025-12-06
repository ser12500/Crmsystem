import type { IColumn } from './kanban.types'
import { EnumStatus } from '~/types/deals.types'

export const KANBAN_DATA: IColumn[] = [
  {
    id: EnumStatus.tode,
    name: 'Первичноя проверка',
    items: [],
  },
  {
    id: EnumStatus['to-be-agreed'],
    name: 'Возврат на доработку',
    items: [],
  },
  {
    id: EnumStatus['in-progress'],
    name: 'Повторная проверка ',
    items: [],
  },
  {
    id: EnumStatus.produced,
    name: 'Техническая проверка',
    items: [],
  },
  {
    id: EnumStatus.done,
    name: 'Допуск к защите',
    items: [],
  },
]
