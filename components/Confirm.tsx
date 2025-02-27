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
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        تاكيد
                    </DialogTitle>
                </DialogHeader>

                <div className="my-10 text-end">
                    <DialogDescription>
                        هذا الإجراء لا يمكن التراجع عنه
                    </DialogDescription>
                </div>

                <DialogFooter className="flex justify-center items-center w-full">
                    <DialogClose asChild>
                        <Button className="btn-primary mx-auto rounded-sm">
                            اغلاق
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Confirm