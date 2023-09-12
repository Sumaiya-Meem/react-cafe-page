import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks,readingTime}) => {
    console.log(bookMarks)
    return (
        
        <div className="md:w-1/3 ml-6 ">
            <div className='bg-gray-50 p-4 rounded-md border-b-2 my-2'>
                <p className='text-[#6047EC] text-xl font-medium'>Spent time on read : {readingTime} min</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
            <h1 className='text-2xl font-semibold'>Bookmarked Blogs : {bookMarks.length}</h1>
            {
                bookMarks.map((bookMark,index)=><Bookmark key={index} bookMark={bookMark}></Bookmark>)
            }
        </div>
        </div>
        
    );
};

Bookmarks.propTypes={
    bookMarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;