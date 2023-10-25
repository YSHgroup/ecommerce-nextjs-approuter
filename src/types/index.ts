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