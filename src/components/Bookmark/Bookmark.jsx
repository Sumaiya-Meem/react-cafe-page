import PropTypes from 'prop-types';
const Bookmark = ({bookMark}) => {
    const {title} =bookMark
    return (
        <div className='bg-white border-b-2 my-2 rounded-xl'>
            <p className='text-xl font-semibold p-4 '>{title}</p>
        </div>
    );
};
Bookmark.propTypes={
    bookMark:PropTypes.object
}

export default Bookmark;