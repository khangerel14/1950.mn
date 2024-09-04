import { Apple, Playstore } from "@/images"

export const About = () => {
  return (
    <div className="flex flex-col justify-between h-[480px] max-w-screen-xl px-10 mx-auto my-40">
        <div>
            <h1 className="border border-red-600 px-3 py-1 rounded-3xl w-fit">Монголын анхдагч лавлах үйлчилгээ</h1>
        </div>
        <div className="flex flex-col gap-9">
            <h1 className="text-5xl font-medium">Яаралтай Такси дуудах бол?</h1>
            <p className="text-4xl">1950 Апп татаарай</p>
        </div>
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
    </div>
  )
}