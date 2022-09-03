import { Maybe, Scalars } from './common.types';

export interface RecentOrders {
  id: string;
  customer: string;
  product: string;
  date: string;
  paymentType: string;
  price: string;
  status: string;
}

export interface FilterData {
  name: string;
	text: string;
  page?: string | number;
}

export interface RecentOrders {
  id: string;
  customer: string;
  product: string;
  date: string;
  paymentType: string;
  price: string;
  status: string;
}

export interface CustomersData {
  id: number;
  name: string;
  email: string;
  lastItem: string;
  lastOrder: string;
  rating: string;
  balance: string;
  address: string;
  joinDate: string;
}

export declare type Address = {
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  default?: Maybe<Scalars["Boolean"]>;
  address?: Maybe<UserAddress>;
  type?: Maybe<Scalars["String"]>;
  customer?: Maybe<User>;
};

export declare type UserAddress = {
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
	address2?: Maybe<Scalars["String"]>;
};

export declare type User = {
  id: Scalars["ID"];
  firstName: Scalars["String"];
	lastName: Scalars["String"];
	fullName: Scalars["String"];
  email: Scalars["String"];
  address: Array<Address>;
  status: Boolean;
  profile?: Maybe<Profile>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export declare type Profile = {
  id: Scalars["ID"];
  avatar?: Maybe<Attachment>;
  bio?: Maybe<Scalars["String"]>;
  contact?: Maybe<Scalars["String"]>;
  customer?: Maybe<User>;
};

/** Pagination information about the corresponding list of items. */
export declare type PaginatorInfo = {
  /** Total count of available items in the page. */
  count: Scalars["Int"];
  /** Current pagination page. */
  currentPage: Scalars["Int"];
  /** If collection has more pages. */
  hasMorePages: Scalars["Boolean"];
  /** Last page number of the collection. */
  lastPage: Scalars["Int"];
  /** Number of items per page in the collection. */
  perPage: Scalars["Int"];
  /** Total items available in the collection. */
  total: Scalars["Int"];
};

export declare type TypeSettings = {
  isHome?: Maybe<Scalars["Boolean"]>;
  layoutType?: Maybe<Scalars["String"]>;
  productCard?: Maybe<Scalars["String"]>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = "asc",
  /** Sort records in descending order. */
  Desc = "desc",
}


export declare type Attachment = {
  id?: Maybe<Scalars["ID"]>;
  url: Scalars["String"];
  thumbnail?: Maybe<Scalars["String"]>;
	file?: Maybe<FileInput>;
};

export declare type FileInput = {
	id?: Maybe<Scalars["ID"]>;
	file?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

/** A paginated list of User items. */
export declare type UserPaginator = {
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of User items. */
  data: Array<User>;
};

export declare type AddressInput = {
  title: Scalars["String"];
  default?: Maybe<Scalars["Boolean"]>;
  address: UserAddressInput;
  type: Scalars["String"];
  customer?: Maybe<ConnectBelongsTo>;
};

export declare type UserAddressInput = {
  address?: Maybe<Scalars["String"]>;
	phone?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
	lat?: Maybe<Scalars["String"]>;
	lng?: Maybe<Scalars["String"]>;
};

export declare type ConnectBelongsTo = {
  connect?: Maybe<Scalars["ID"]>;
};

export declare type AttachmentInput = {
  thumbnail?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
};

export declare type CreateCategory = {
  name: Scalars["String"];
  groupId?: Maybe<Scalars["ID"]>;
  parent?: Maybe<Scalars["Int"]>;
  details?: Maybe<Scalars["String"]>;
  image?: Maybe<AttachmentInput>;
  icon?: Maybe<Scalars["String"]>;
};

export declare type UpdateCategory = {
  name?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["ID"]>;
  parent?: Maybe<Scalars["Int"]>;
  details?: Maybe<Scalars["String"]>;
  image?: Maybe<AttachmentInput>;
  icon?: Maybe<Scalars["String"]>;
};

export declare type ProfileInput = {
  avatar?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  contact?: Maybe<Scalars["String"]>;
  customer?: Maybe<ConnectBelongsTo>;
};

export type DeliveryTimeInput = {
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type FacebookSettings = {
  appId?: Maybe<Scalars["String"]>;
  isEnable?: Maybe<Scalars["Boolean"]>;
  pageId?: Maybe<Scalars["String"]>;
};

export type GoogleSettings = {
  isEnable?: Maybe<Scalars["Boolean"]>;
  tagManagerId?: Maybe<Scalars["String"]>;
};

export type SeoSettings = {
  canonicalUrl?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTags?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  ogDescription?: Maybe<Scalars["String"]>;
  ogImage?: Maybe<Attachment>;
  ogTitle?: Maybe<Scalars["String"]>;
  twitterCardType?: Maybe<Scalars["String"]>;
  twitterHandle?: Maybe<Scalars["String"]>;
};

export declare type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export declare type RegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  firstName: Scalars["String"];
	lastName: Scalars["String"];
  storeId?: Scalars["Int"];
  permission: Permission;
};

export type ChangePasswordInput = {
  oldPassword: Scalars["String"];
  newPassword: Scalars["String"];
};

export type PasswordChangeResponse = {
  message?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type EmailVerificationInput = {
  token: Scalars["String"];
};

export type ForgetPasswordInput = {
  email: Scalars["String"];
};

export type VerifyForgetPasswordTokenInput = {
  token: Scalars["String"];
  email?: Scalars["String"];
};

export type ResetPasswordInput = {
  token: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export enum Permission {
  /** Super admin */
  Admin = "admin",
  /** Store owner */
  StoreOwner = "store_owner",
  /** Store keeper */
  Staff = "staff" /** Customer */,
  Customer = "customer",
}

export type UpdateUser = {
  name?: Maybe<Scalars["String"]>;
  profile?: Maybe<UserProfileInput>;
  address?: Maybe<Array<Maybe<UserAddressUpsertInput>>>;
};

export type CreateUser = {
  name?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  password: Scalars["String"];
  profile?: Maybe<UserProfileInput>;
  address?: Maybe<Array<Maybe<UserAddressUpsertInput>>>;
};

export type UserProfileInput = {
  id: Scalars["ID"];
  avatar?: Maybe<AttachmentInput>;
  bio?: Maybe<Scalars["String"]>;
  contact?: Maybe<Scalars["String"]>;
};

export type UserAddressUpsertInput = {
  title: Scalars["String"];
  default?: Maybe<Scalars["Boolean"]>;
  address: UserAddressInput;
  type: Scalars["String"];
};

export declare type Location = {
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  formattedAddress?: Maybe<Scalars["String"]>;
};

export declare type LocationInput = {
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  formattedAddress?: Maybe<Scalars["String"]>;
};

export declare type TypeSettingsInput = {
  isHome?: Maybe<Scalars["Boolean"]>;
  layoutType?: Maybe<Scalars["String"]>;
  productCard?: Maybe<Scalars["String"]>;
};
