import {client} from "@/sanity/lib/client";
import {GET_ALL_STARTUPS_BY_USER_ID} from "@/sanity/lib/queries";

import StartupCard,{StartupTypeCard} from "@/components/StartupCard";

const UserStartups=async ({id} : {id:string})=>{
  const startups = await client.fetch(GET_ALL_STARTUPS_BY_USER_ID,{id})
  return(
      <>
        {startups.length > 0 ? startups.map((startup:StartupTypeCard)=>(
           <StartupCard key={startup._id} post={startup}/>
        )):<p className={"no-result"}>No posts yet</p>}
      </>
  )
}
export default UserStartups