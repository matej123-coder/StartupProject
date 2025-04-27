import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const StartupCard=({post}:{post:StartupTypeCard})=>{
const {_createdAt,views,author:{_id:authorId,name},title,_id,category,image,description} = post;
  return(
      <li className={"startup-card group]:"}>
        <div className={"flex-between"}>
          <p className={"startup-card_date"}>
            {formatDate(_createdAt)}
          </p>
          <div className={"flex gap-1.5"}>
            <EyeIcon className={"size-6 text-primary "}/>
            <span className={"text-16-medium"}>{views}</span>
          </div>
        </div>
        <div className={"flex-between mt-5 gap-5 ml-4"}>
          <div className={"flex-1"}>
            <Link href={`/user/${authorId}`}>
              <p className={"text-16-medium line-clamp-1"}>{name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className={"text-26-semibold line-clamp-1"}>{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${authorId}`}>
            <Image src={`https://placehold.co/600x400`} alt={"placeholder"} width={48} height={48} className={"rounded-full"}/>

          </Link>
        </div>
        <div className={"ml-4"}>
          <Link href={`/startup/${_id}`}>
            <p className={"startup-card_desc"}>
              {description}
            </p>
            <img src={`${image}`} alt={"placeholder"} className={"startup-card_img"}/>
          </Link>
        </div>
        <div className={"flex-between gap-3 mt-5 ml-4"}>
            <Link href={`/?query=${category.toLowerCase()}`}>
              <p className={"text-16-medium line-clamp-1"}>{category}</p>
            </Link>
          <Button className={"startup-card_btn"} asChild={true}>
              <Link href={`/startup/${_id}`} >
                Details
              </Link>
          </Button>
        </div>
      </li>
  )
}
export default StartupCard;