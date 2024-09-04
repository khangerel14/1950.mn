import { Car, BackWheel, FrontWheel } from "@/images"

export const CarCom = () => {
  return (
    <div className="mb-80">
      <div className="absolute z-10">
        <div className="relative">
          <Car />
        </div>
      </div>
      <div className="border-slate-900 border top-52 relative"></div>
    </div>
  )
}
