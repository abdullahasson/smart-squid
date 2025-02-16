import Image from "next/image"
import Manager1 from "@/image/manager 1.jpg"
import Manager2 from "@/image/manager 2.jpg"


const Managers = () => {

    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col items-end pt-10 pb-12">
                <div className="w-full text-end flex-1 mb-10">
                    <h2 className="text-[#C74D0A] text-2xl font-bold pt-6 mb-4">المدراء</h2>
                </div>
                <div className="w-full flex justify-between flex-row-reverse items-center gap-4">
                    <div className="flex justify-between items-center flex-row-reverse text-end gap-4">
                        <Image src={Manager1} alt="Success Partner 1" className="rounded-full" />
                        <div>
                            <h3 className="text-[#5E4D9D] text-xl font-semibold mb-4">حسين أحمد ال منقاح</h3>
                            <p className="text-[#7B7B7B] text-lg font-normal">المؤسس المشارك و المدير الأبداعي</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-row-reverse text-end gap-4">
                        <Image src={Manager2} alt="Success Partner 2" className="rounded-full" />
                        <div>
                            <h3 className="text-[#5E4D9D] text-xl font-semibold mb-4">عماد براك اليابسي</h3>
                            <p className="text-[#7B7B7B] text-lg font-normal">المؤسس المشارك و مدير التسويق الرقمي</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Managers
