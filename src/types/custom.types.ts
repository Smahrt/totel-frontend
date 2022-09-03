import { QueryKey } from 'react-query';

import { SortOrder } from './generated';

export declare type Maybe<T> = T | null;

export type CategoriesQueryOptionsType = {
  group?: string;
  text?: string;
  page?: number;
  parent?: number | null;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type TagsQueryOptionsType = {
  group?: string;
  text?: string;
  page?: number;
  parent?: number | null;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type StoresCategoriesOptionsType = {
	id: number;
  name: string;
  description?: string;
	image?: string;
  status: boolean;
};

export type StoresQueryOptionsType = {
  text?: string;
  page?: number;
  parent?: number | null;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type StoresDocumentQueryOptionsType = {
	slug: string;
  text?: string;
  page?: number;
  parent?: number | null;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type WithdrawsQueryOptionsType = {
  text?: string;
  storeId?: number;
  page?: number;
  parent?: number | null;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type ProductsQueryOptionsType = {
  page?: number;
  storeId?: number;
  text?: string;
  type?: string;
  category?: string;
  status?: string;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type TypesQueryOptionsType = {
  page?: number;
  text?: string;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type StaffsQueryOptionsType = {
  page?: number;
  storeId?: number;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type QueryOptionsType = {
  page?: number;
  text?: string;
  storeId?: number;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};

export type EmailVerificationInput = {
  token: string;
};