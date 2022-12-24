import Navbar from '../components/navbar'
import BlogManagement from '../components/blogManagement'

export default function newBlog(){
    return(
        <div className='w-full h-full'>
            <Navbar />
            <BlogManagement />
        </div>
    )
}