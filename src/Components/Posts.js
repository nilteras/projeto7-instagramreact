import Post from './Post'

const ListPosts = [
    {
        image: "assets/img/meowed.svg",
        user: "meowed",
        imagePost: "assets/img/gato-telefone.svg",
        likeImage: "assets/img/respondeai.svg",
        likeName: "respondeai",
        likes: 101.523
    },
    {
        image: "assets/img/barked.svg",
        user: "barked",
        imagePost: "assets/img/dog.svg",
        likeImage: "assets/img/adorable_animals.svg",
        likeName: "adorable_animals",
        likes: 124.159 
    },
    {
        image: "assets/img/meowed.svg",
        user: "meowed",
        imagePost: "assets/img/gato-telefone.svg",
        likeImage: "assets/img/respondeai.svg",
        likeName: "respondeai",
        likes: 101.523
    },
];

export default function Posts(){
    return (
        <div className="posts">
            {ListPosts.map(Post)}
            
        </div>
    );
}