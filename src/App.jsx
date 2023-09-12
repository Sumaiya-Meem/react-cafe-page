
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookMarks,setBookmark]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleBookMark=(blog) =>{
    const newBookMark=[...bookMarks,blog];
    setBookmark(newBookMark);
  }

  const handleReadingTime=(id,time)=>{
     setReadingTime(readingTime+time);
     const remainingBookMark=bookMarks.filter(bookmark => bookmark.id!==id)
     setBookmark(remainingBookMark);

  }

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <hr />

        {/* main div */}
        <div className='flex flex-col md:flex-row mt-8'>
           <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
           <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
