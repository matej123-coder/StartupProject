const Ping = () => {
  return (
      <div className={"relative"}>
        <div className={"absolute -left-4 top-1"}>
        <span className={"flex size-[11px] bg-red-500 rounded-full"}>
          <span
              className={"absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-200 opacity-75"}></span>
        </span>
        </div>
      </div>
  )
}
export default Ping