import React, { useState } from 'react'
import musicData from './data.json'
import { Header } from './components/Header'
import { Album } from './components/Album'

const allData = musicData.albums.items

export const App = () => {
  const [data, setData] = useState(allData);
  if (data === undefined || data.length === 0) {
    console.log('Empty state')
  }
  return (
    <>
      <Header toChild={data} sendToParent={setData} />
      <section className="albums">
        {data.map((item) => {
          return (
            <div className="album" key={item.id}>
              <Album key={item.id} item={item} />
            </div>
          )
        })}
      </section>
    </>
  )
}
export default App