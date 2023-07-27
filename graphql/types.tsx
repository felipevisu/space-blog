import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsPostCollectionOrder {
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SUBTITLE_ASC = 'subTitle_ASC',
  SUBTITLE_DESC = 'subTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum AssetOrder {
  CONTENTTYPE_ASC = 'contentType_ASC',
  CONTENTTYPE_DESC = 'contentType_DESC',
  FILENAME_ASC = 'fileName_ASC',
  FILENAME_DESC = 'fileName_DESC',
  HEIGHT_ASC = 'height_ASC',
  HEIGHT_DESC = 'height_DESC',
  SIZE_ASC = 'size_ASC',
  SIZE_DESC = 'size_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC',
  WIDTH_ASC = 'width_ASC',
  WIDTH_DESC = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AuthorLinkingCollectionsPostCollectionOrder {
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SUBTITLE_ASC = 'subTitle_ASC',
  SUBTITLE_DESC = 'subTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum AuthorOrder {
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/category) */
export type CategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/category) */
export type CategoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CategoryLinkingCollectionsPostCollectionOrder {
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SUBTITLE_ASC = 'subTitle_ASC',
  SUBTITLE_DESC = 'subTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum CategoryOrder {
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  AVIF = 'AVIF',
  /** JPG image format. */
  JPG = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JPG_PROGRESSIVE = 'JPG_PROGRESSIVE',
  /** PNG image format */
  PNG = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  PNG8 = 'PNG8',
  /** WebP image format. */
  WEBP = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  BOTTOM = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  CENTER = 'CENTER',
  /** Focus the resizing on the largest face. */
  FACE = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  FACES = 'FACES',
  /** Focus the resizing on the left. */
  LEFT = 'LEFT',
  /** Focus the resizing on the right. */
  RIGHT = 'RIGHT',
  /** Focus the resizing on the top. */
  TOP = 'TOP',
  /** Focus the resizing on the top left. */
  TOP_LEFT = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TOP_RIGHT = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  CROP = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  FILL = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  FIT = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  PAD = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  SCALE = 'SCALE',
  /** Creates a thumbnail from the image. */
  THUMB = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post';
  authorsCollection?: Maybe<PostAuthorsCollection>;
  category?: Maybe<Category>;
  content?: Maybe<PostContent>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<PostLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostAuthorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PostAuthorsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostSubTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/dvbd88vdtp90/content_types/post) */
export type PostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PostAuthorsCollection = {
  __typename?: 'PostAuthorsCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PostAuthorsCollectionOrder {
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type PostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PostContent = {
  __typename?: 'PostContent';
  json: Scalars['JSON']['output'];
  links: PostContentLinks;
};

export type PostContentAssets = {
  __typename?: 'PostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostContentEntries = {
  __typename?: 'PostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostContentLinks = {
  __typename?: 'PostContentLinks';
  assets: PostContentAssets;
  entries: PostContentEntries;
  resources: PostContentResources;
};

export type PostContentResources = {
  __typename?: 'PostContentResources';
  block: Array<ResourceLink>;
};

export type PostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  authors?: InputMaybe<CfAuthorNestedFilter>;
  authorsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<CfCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  subTitle_contains?: InputMaybe<Scalars['String']['input']>;
  subTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitle_not?: InputMaybe<Scalars['String']['input']>;
  subTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PostOrder {
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SUBTITLE_ASC = 'subTitle_ASC',
  SUBTITLE_DESC = 'subTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  entryCollection?: Maybe<EntryCollection>;
  post?: Maybe<Post>;
  postCollection?: Maybe<PostCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryFragment = { __typename?: 'Category', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PostFragment = { __typename?: 'Post', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, authorsCollection?: { __typename?: 'PostAuthorsCollection', items: Array<{ __typename?: 'Author', name?: string | null } | null> } | null };

export type PostDetailsFragment = { __typename?: 'Post', title?: string | null, slug?: string | null, subTitle?: string | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, category?: { __typename?: 'Category', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null, content?: { __typename?: 'PostContent', json: any, links: { __typename?: 'PostContentLinks', assets: { __typename?: 'PostContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, authorsCollection?: { __typename?: 'PostAuthorsCollection', items: Array<{ __typename?: 'Author', name?: string | null } | null> } | null };

export type CategoriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CategoriesPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesPathsQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null } | null> } | null };

export type CategoryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoryQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type PostQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', title?: string | null, slug?: string | null, subTitle?: string | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, category?: { __typename?: 'Category', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null, content?: { __typename?: 'PostContent', json: any, links: { __typename?: 'PostContentLinks', assets: { __typename?: 'PostContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, authorsCollection?: { __typename?: 'PostAuthorsCollection', items: Array<{ __typename?: 'Author', name?: string | null } | null> } | null } | null> } | null };

export type PostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostsQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, authorsCollection?: { __typename?: 'PostAuthorsCollection', items: Array<{ __typename?: 'Author', name?: string | null } | null> } | null } | null> } | null };

export type PostsPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostsPathsQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug?: string | null, category?: { __typename?: 'Category', slug?: string | null } | null } | null> } | null };

export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  sys {
    id
  }
  title
  slug
}
    `;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  sys {
    id
  }
  title
  slug
  thumbnail {
    title
    url
  }
  authorsCollection {
    items {
      name
    }
  }
}
    `;
export const PostDetailsFragmentDoc = gql`
    fragment PostDetails on Post {
  sys {
    id
  }
  title
  slug
  subTitle
  thumbnail {
    title
    url
  }
  category {
    sys {
      id
    }
    title
  }
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  authorsCollection {
    items {
      name
    }
  }
}
    `;
export const CategoriesDocument = gql`
    query Categories($limit: Int, $skip: Int) {
  categoryCollection(limit: $limit, skip: $skip) {
    items {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoriesPathsDocument = gql`
    query CategoriesPaths($limit: Int, $skip: Int) {
  categoryCollection(limit: $limit, skip: $skip) {
    items {
      slug
    }
  }
}
    `;

/**
 * __useCategoriesPathsQuery__
 *
 * To run a query within a React component, call `useCategoriesPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesPathsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCategoriesPathsQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesPathsQuery, CategoriesPathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesPathsQuery, CategoriesPathsQueryVariables>(CategoriesPathsDocument, options);
      }
export function useCategoriesPathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesPathsQuery, CategoriesPathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesPathsQuery, CategoriesPathsQueryVariables>(CategoriesPathsDocument, options);
        }
export type CategoriesPathsQueryHookResult = ReturnType<typeof useCategoriesPathsQuery>;
export type CategoriesPathsLazyQueryHookResult = ReturnType<typeof useCategoriesPathsLazyQuery>;
export type CategoriesPathsQueryResult = Apollo.QueryResult<CategoriesPathsQuery, CategoriesPathsQueryVariables>;
export const CategoryDocument = gql`
    query Category($slug: String) {
  categoryCollection(limit: 1, where: {slug: $slug}) {
    items {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const PostDocument = gql`
    query Post($slug: String) {
  postCollection(limit: 1, where: {slug: $slug}) {
    items {
      ...PostDetails
    }
  }
}
    ${PostDetailsFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts($limit: Int, $skip: Int, $category: String) {
  postCollection(limit: $limit, skip: $skip, where: {category: {slug: $category}}) {
    items {
      ...Post
    }
  }
}
    ${PostFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      category: // value for 'category'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostsPathsDocument = gql`
    query PostsPaths($limit: Int, $skip: Int) {
  postCollection(limit: $limit, skip: $skip) {
    items {
      slug
      category {
        slug
      }
    }
  }
}
    `;

/**
 * __usePostsPathsQuery__
 *
 * To run a query within a React component, call `usePostsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsPathsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function usePostsPathsQuery(baseOptions?: Apollo.QueryHookOptions<PostsPathsQuery, PostsPathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsPathsQuery, PostsPathsQueryVariables>(PostsPathsDocument, options);
      }
export function usePostsPathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsPathsQuery, PostsPathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsPathsQuery, PostsPathsQueryVariables>(PostsPathsDocument, options);
        }
export type PostsPathsQueryHookResult = ReturnType<typeof usePostsPathsQuery>;
export type PostsPathsLazyQueryHookResult = ReturnType<typeof usePostsPathsLazyQuery>;
export type PostsPathsQueryResult = Apollo.QueryResult<PostsPathsQuery, PostsPathsQueryVariables>;
export type AssetKeySpecifier = ('contentType' | 'contentfulMetadata' | 'description' | 'fileName' | 'height' | 'linkedFrom' | 'size' | 'sys' | 'title' | 'url' | 'width' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | AssetCollectionKeySpecifier)[];
export type AssetCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetLinkingCollectionsKeySpecifier = ('entryCollection' | 'postCollection' | AssetLinkingCollectionsKeySpecifier)[];
export type AssetLinkingCollectionsFieldPolicy = {
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	postCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorKeySpecifier = ('contentfulMetadata' | 'linkedFrom' | 'name' | 'sys' | AuthorKeySpecifier)[];
export type AuthorFieldPolicy = {
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | AuthorCollectionKeySpecifier)[];
export type AuthorCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorLinkingCollectionsKeySpecifier = ('entryCollection' | 'postCollection' | AuthorLinkingCollectionsKeySpecifier)[];
export type AuthorLinkingCollectionsFieldPolicy = {
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	postCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('contentfulMetadata' | 'linkedFrom' | 'slug' | 'sys' | 'title' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | CategoryCollectionKeySpecifier)[];
export type CategoryCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryLinkingCollectionsKeySpecifier = ('entryCollection' | 'postCollection' | CategoryLinkingCollectionsKeySpecifier)[];
export type CategoryLinkingCollectionsFieldPolicy = {
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	postCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentfulMetadataKeySpecifier = ('tags' | ContentfulMetadataKeySpecifier)[];
export type ContentfulMetadataFieldPolicy = {
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentfulTagKeySpecifier = ('id' | 'name' | ContentfulTagKeySpecifier)[];
export type ContentfulTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryKeySpecifier = ('contentfulMetadata' | 'sys' | EntryKeySpecifier)[];
export type EntryFieldPolicy = {
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | EntryCollectionKeySpecifier)[];
export type EntryCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('authorsCollection' | 'category' | 'content' | 'contentfulMetadata' | 'date' | 'linkedFrom' | 'slug' | 'subTitle' | 'sys' | 'thumbnail' | 'title' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	authorsCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	subTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostAuthorsCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | PostAuthorsCollectionKeySpecifier)[];
export type PostAuthorsCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | PostCollectionKeySpecifier)[];
export type PostCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostContentKeySpecifier = ('json' | 'links' | PostContentKeySpecifier)[];
export type PostContentFieldPolicy = {
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostContentAssetsKeySpecifier = ('block' | 'hyperlink' | PostContentAssetsKeySpecifier)[];
export type PostContentAssetsFieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	hyperlink?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostContentEntriesKeySpecifier = ('block' | 'hyperlink' | 'inline' | PostContentEntriesKeySpecifier)[];
export type PostContentEntriesFieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	hyperlink?: FieldPolicy<any> | FieldReadFunction<any>,
	inline?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostContentLinksKeySpecifier = ('assets' | 'entries' | 'resources' | PostContentLinksKeySpecifier)[];
export type PostContentLinksFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostContentResourcesKeySpecifier = ('block' | PostContentResourcesKeySpecifier)[];
export type PostContentResourcesFieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostLinkingCollectionsKeySpecifier = ('entryCollection' | PostLinkingCollectionsKeySpecifier)[];
export type PostLinkingCollectionsFieldPolicy = {
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('asset' | 'assetCollection' | 'author' | 'authorCollection' | 'category' | 'categoryCollection' | 'entryCollection' | 'post' | 'postCollection' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	assetCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	postCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceLinkKeySpecifier = ('sys' | ResourceLinkKeySpecifier)[];
export type ResourceLinkFieldPolicy = {
	sys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceSysKeySpecifier = ('linkType' | 'type' | 'urn' | ResourceSysKeySpecifier)[];
export type ResourceSysFieldPolicy = {
	linkType?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	urn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SysKeySpecifier = ('environmentId' | 'firstPublishedAt' | 'id' | 'publishedAt' | 'publishedVersion' | 'spaceId' | SysKeySpecifier)[];
export type SysFieldPolicy = {
	environmentId?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPublishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	spaceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	AssetCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetCollectionKeySpecifier | (() => undefined | AssetCollectionKeySpecifier),
		fields?: AssetCollectionFieldPolicy,
	},
	AssetLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetLinkingCollectionsKeySpecifier | (() => undefined | AssetLinkingCollectionsKeySpecifier),
		fields?: AssetLinkingCollectionsFieldPolicy,
	},
	Author?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorKeySpecifier | (() => undefined | AuthorKeySpecifier),
		fields?: AuthorFieldPolicy,
	},
	AuthorCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorCollectionKeySpecifier | (() => undefined | AuthorCollectionKeySpecifier),
		fields?: AuthorCollectionFieldPolicy,
	},
	AuthorLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorLinkingCollectionsKeySpecifier | (() => undefined | AuthorLinkingCollectionsKeySpecifier),
		fields?: AuthorLinkingCollectionsFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCollectionKeySpecifier | (() => undefined | CategoryCollectionKeySpecifier),
		fields?: CategoryCollectionFieldPolicy,
	},
	CategoryLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryLinkingCollectionsKeySpecifier | (() => undefined | CategoryLinkingCollectionsKeySpecifier),
		fields?: CategoryLinkingCollectionsFieldPolicy,
	},
	ContentfulMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentfulMetadataKeySpecifier | (() => undefined | ContentfulMetadataKeySpecifier),
		fields?: ContentfulMetadataFieldPolicy,
	},
	ContentfulTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentfulTagKeySpecifier | (() => undefined | ContentfulTagKeySpecifier),
		fields?: ContentfulTagFieldPolicy,
	},
	Entry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryKeySpecifier | (() => undefined | EntryKeySpecifier),
		fields?: EntryFieldPolicy,
	},
	EntryCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryCollectionKeySpecifier | (() => undefined | EntryCollectionKeySpecifier),
		fields?: EntryCollectionFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostAuthorsCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostAuthorsCollectionKeySpecifier | (() => undefined | PostAuthorsCollectionKeySpecifier),
		fields?: PostAuthorsCollectionFieldPolicy,
	},
	PostCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostCollectionKeySpecifier | (() => undefined | PostCollectionKeySpecifier),
		fields?: PostCollectionFieldPolicy,
	},
	PostContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostContentKeySpecifier | (() => undefined | PostContentKeySpecifier),
		fields?: PostContentFieldPolicy,
	},
	PostContentAssets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostContentAssetsKeySpecifier | (() => undefined | PostContentAssetsKeySpecifier),
		fields?: PostContentAssetsFieldPolicy,
	},
	PostContentEntries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostContentEntriesKeySpecifier | (() => undefined | PostContentEntriesKeySpecifier),
		fields?: PostContentEntriesFieldPolicy,
	},
	PostContentLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostContentLinksKeySpecifier | (() => undefined | PostContentLinksKeySpecifier),
		fields?: PostContentLinksFieldPolicy,
	},
	PostContentResources?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostContentResourcesKeySpecifier | (() => undefined | PostContentResourcesKeySpecifier),
		fields?: PostContentResourcesFieldPolicy,
	},
	PostLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostLinkingCollectionsKeySpecifier | (() => undefined | PostLinkingCollectionsKeySpecifier),
		fields?: PostLinkingCollectionsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ResourceLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceLinkKeySpecifier | (() => undefined | ResourceLinkKeySpecifier),
		fields?: ResourceLinkFieldPolicy,
	},
	ResourceSys?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceSysKeySpecifier | (() => undefined | ResourceSysKeySpecifier),
		fields?: ResourceSysFieldPolicy,
	},
	Sys?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SysKeySpecifier | (() => undefined | SysKeySpecifier),
		fields?: SysFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;