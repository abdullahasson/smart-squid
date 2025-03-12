"use client"

// Shadcn UI
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type ChildComponentProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean
};


const Confirm = ({ isOpen, setIsOpen }: ChildComponentProps) => {

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="hidden"></button>
            </DialogTrigger>


            <DialogContent className="w-[900px] border-none sm:rounded-[30px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#C74D0A] text-xl font-semibold">
                        تأكيد حجز الأجتماع
                    </DialogTitle>
                </DialogHeader>

                <div className="mt-3 mb-4">
                    <DialogDescription className="text-center text-[#434343] text-lg font-semibold mb-4">
                        شكرا لك! لقد تم تأكيد حجز اجتماعك
                    </DialogDescription>
                    <DialogDescription className="text-center text-[#434343] text-lg font-semibold">
                        تم ارسال بريد الكتروني يحتوي على تفاصيل الأجتماع
                    </DialogDescription>
                </div>

                <DialogFooter className="flex justify-center items-center w-full">
                    <DialogClose asChild>
                        <Button className="btn-close mx-auto">
                            اغلاق
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Confirm