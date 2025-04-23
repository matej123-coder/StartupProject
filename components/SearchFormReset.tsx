"use client"
import Link from "next/link";
import {X} from "lucide-react";

const SearchFormReset = () => {

  const reset=()=>{

    const form = document.querySelector(".search-form") as HTMLFormElement;
    if(form){
      form.reset();
    }
  }
  return (
      <button onClick={reset} type={"reset"}>
        <Link href={"/public"} className={"search-btn text-white"}>
          <X className={"size-5"}/>
        </Link>
      </button>
  )
}
export default SearchFormReset