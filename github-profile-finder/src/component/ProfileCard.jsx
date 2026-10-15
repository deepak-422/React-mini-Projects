
export default function ProfileCard({userData,error}){
    if(error){
       
    }
    return (
        <div className="bg-blue-100  w-full h-100 flex flex-col items-center rounded-md gap-3 text-2xl p-2">
             <img src={userData.imageURL} alt="not found" className="rounded-full  h-30 w-30" />
            <div className="flex flex-col gap-2">
                <span className="flex gap-5 justify-center"> 
                    <a href={userData.url}><strong>{userData.username}</strong></a>
                    <p>{userData.date?userData.date.toDateString():""}</p>
                </span>
                <div className="flex flex-col items-center gap-5">
                    <span><strong>Public Repos</strong> : {userData.repos}</span>
                    <span><strong>Follower </strong>: {userData.followers}</span>
                    <span><strong>Following </strong> : {userData.following}</span>
                </div>

            </div>

        </div>
    )
}