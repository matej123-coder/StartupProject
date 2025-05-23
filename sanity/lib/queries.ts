import {defineQuery} from "next-sanity";


export const STARTUPS_QUERY = defineQuery(`
*[_type=="startup"
 && defined(slug.current)
  && !defined($search) || title match $search
  || category match $search
   || author->name match $search] 
   | order(_createdAt desc) {
  _id,
    title,
    slug, 
    _createdAt,
    author -> {
    name,_id,image,bio
    }, 
    views, 
    description, 
    category, 
    image
}`)
export const STARTUP_BY_ID = defineQuery(`
*[_type=="startup" && _id==$id][0]{
  _id,
    title,
    slug, 
    _createdAt,
    author -> {
    name,_id,image,bio,username
    }, 
    views, 
    description, 
    category, 
    image,
    pitch
}`)
export const STARTUP_VIEWS_QUERY = defineQuery(`
*[_type=="startup" && _id==$id][0]{
  _id,
  views,
}
`)
export const AUTHOR_BY_GITHUB_ID = defineQuery(`
*[_type=="author" && id == $id][0]{
_id,
id,
name,
username,
email,
image,
bio
}
`)
export const AUTHOR_BY_ID = defineQuery(`
*[_type=="author" && _id == $id][0]{
_id,
id,
name,
username,
email,
image,
bio
}
`)
export const GET_ALL_STARTUPS_BY_USER_ID = defineQuery(`
*[_type=="startup" && author._ref==$id] | order(_createdAt desc){
    _id,
    title,
    slug, 
    _createdAt,
    author -> {
    name,_id,image,bio,username
    }, 
    views, 
    description, 
    category, 
    image,
    pitch
}`)
export const PLAYLIST_BY_SLUG_QUERY =
    defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);