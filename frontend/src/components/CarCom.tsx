import { Car, BackWheel, FrontWheel } from "@/images"

export const CarCom = () => {
  return (
    <div className="mb-80">
      <div className="absolute z-10">
        <div className="relative">
          <Car />
        </div>
        {/* <div className="absolute z-30 h-[110px] w-[110px] right-[335px] top-[155px]"><BackWheel /></div> */}
        {/* <div className="absolute z-30 h-[110px] w-[110px] left-[350px] top-[155px]"><FrontWheel /></div> */}
      </div>
      <div className="border-slate-900 border top-52 relative"></div>
    </div>
  )
}
