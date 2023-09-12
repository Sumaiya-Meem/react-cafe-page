import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog,handleBookMark,handleReadingTime}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} =blog

    return (
        <div className='space-y-4 mb-6 border-b-2'>
            <img src={cover} className="w-full" alt={`Cover image of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                   <img src={author_img} className="w-20" alt="" />
                   <div>
                       <h1>{author}</h1>
                       <p>{posted_date}</p>
                   </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-4 text-red-400 text-xl' onClick={()=>handleBookMark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <p className='font-bold text-3xl'>{title}</p>
            <p>{
                hashtags.map((hash,index) => <span key={index}><a href="" className='mr-4'>#{hash}</a></span> )
            }</p>
            <button className='text-purple-700 underline ' onClick={()=>{handleReadingTime(id,reading_time)}}>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func,
    handleReadingTime:PropTypes.func
}


export default Blog;