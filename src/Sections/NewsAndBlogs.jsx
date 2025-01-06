import BlogCard from "../smallComponents/BlogCard";
import BlogSideCard from "../smallComponents/BlogSideCard";
import garmany from "../assets/Types-of-Visas-for-Germany-1.jpg";
import newZeland from "../assets/new-zealand-work-visa-featured.webp";
import plane from "../assets/earth.png";
import visa from "../assets/visa.png";

const NewsAndBlogs = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl mb-8 lg:mb-12 font-playfair text-center">Latest Visa News and Blogs</h1>     
            <div className="grid grid-cols-12 gap-4">
                <BlogCard></BlogCard>
                <div className="col-span-12 md:col-span-5">
                    <BlogSideCard image={garmany} text={"Garmany! one of the best country for study"} plane={plane} className={"font-playfair"} small={"Visit our website to get more idea"}></BlogSideCard>

                    <BlogSideCard image={newZeland}
                    plane={visa} text={"NewZeland! is now offering discount for tourist"} small={"So, pack your bag and take a view of the beautiful place on earth"}></BlogSideCard>
                </div>   
            </div>       
        </div>
    );
};

export default NewsAndBlogs;