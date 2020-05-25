
export const SITE_TITLE = "Продавец Времени"

export const INITITAL_COST = 500

export type ServiceList =  {
    id: number,
    name: string,
    time: number,
  
}

export const INITITAL_SERVICE_LIST: ServiceList[] = [
  {
    id: 1,
    name: "Работа",
    time: 8,
  },
  {
    id: 2,
    name: "Подработка",
    time: 4,
  },
  {
    id: 3,
    name: "Консультация",
    time: 1,
  },
]