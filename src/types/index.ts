export type prev = {
  onPrev(): void;
}

export type next = {
  onNext(): void;
}
export type Props = {
  canScrollPrev?: boolean;
  canScrollNext?: boolean;
};

export type productByCategoryType = {
  category: string
  product: Record<string, string | string[]>[]
}

export type searchParamsType = Record<string, Record<string, string>>

interface InfoType {
    'id': number
    'title': string
    'description': string
    'price': number
    'discountPercentage': number
    'rating': number
    'stock': number
    'brand': string
    'category': string
    'thumbnail': string
    'images': string[]
}
export interface ProductCardType {
  id: number
  quantity: number
  info: InfoType
}