import { Apple, Playstore } from "@/images"

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-end gap-16 my-5 mt-44">
        <div className="flex flex-col gap-12 items-center">
            <div className="flex gap-8 items-center">
                <button className="flex gap-3 rounded-full px-5 p-3 border items-center shadow-xl">
                    <Apple />
                    <div>
                        <h1>Available on the</h1>
                        <p className="text-gray-500 font-normal">App Store</p>
                    </div>
                </button>
                <button className="flex gap-3 rounded-full px-5 p-3 border items-center shadow-xl">
                    <Playstore />
                    <div>
                        <h1>Get in on</h1>
                        <p className="text-gray-500 font-normal">Google Play</p>
                    </div>
                </button>
            </div>
            <div className="flex gap-14 text-gray-600">
                <button className="text-gray">Танилцуулга</button>
                <button className="text-gray">Боломжууд</button>
                <button className="text-gray">Холбоо барих</button>
            </div>
        </div>
        <div>
            <p>Бүх эрх хуулиар хамгаалагдсан ©2023</p>
        </div>
    </div>
  )
}