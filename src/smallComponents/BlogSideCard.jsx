// eslint-disable-next-line react/prop-types
const BlogSideCard = ({image, text, className, plane, small}) => {
    return (
        <div className="relative mb-4">
            <img className="w-full h-80" src={image} alt="foreign country visa related image" />
            <div className="h-80 p-4 z-30 absolute bg-black opacity-80 top-0 left-0 w-1/2">
            <img className="w-20 mx-auto" src={plane} alt="" />
            <p className={`z-50 text-white text-xl md:text-2xl ${className} mb-2`}>{text}</p>
            <p className="w-[80%] text-white z-50">{small}</p>
            </div>
        </div>
    );
};

export default BlogSideCard;