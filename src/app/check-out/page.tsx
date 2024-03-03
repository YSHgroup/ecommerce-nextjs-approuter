
import DeliveryForm from "@/components/Checkout/DeliveryFrom"
import Bill from '@/components/Checkout/Bill'
const Checkout = () => {
    return (
        <div className="flex flex-col h-screen bg-[#c5e0f0] pt-16">
          <h1 className="mx-10 my-3 text-center font-bold text-emerald-800 text-xl drop-shadow-lg">
            Please Buy Now
          </h1>
          <section className="container after:clear-both rounded mx-auto overflow-hidden h-[85%]">
            <div className="float-left w-1/2 h-full bg-slate-200/70 border-slate-300 border-r border-t">
              <DeliveryForm/>
            </div>
            <div className="float-right w-1/2 h-full bg-slate-200 border-slate-300 border-t">
              <Bill/>
            </div>
          </section>
        </div>
    )
}

export default Checkout