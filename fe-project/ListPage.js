import React from 'react'
import post from './Post'
const ListPage = ({searchResults}) => {

  const results = searchResults.map(post => <Post key={post.id} post={post} />  )
  const content = results?.lenght ? results : <article><p>Bulunamadı</p></article>
  return (
    <main>{content}</main>
  )
}

export default ListPage