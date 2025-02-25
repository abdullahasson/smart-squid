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


const Confirm = ({isOpen , setIsOpen} : ChildComponentProps) => {

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="hidden"></button>
            </DialogTrigger>
            
            
            <DialogContent className="w-[900px] border-none sm:rounded-[30px] bg-blue-300">
                 <DialogHeader className="bg-slate-400">
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        تاكيد
                    </DialogTitle>
                </DialogHeader>

                <DialogDescription className="bg-purple-300">
                    هذا الإجراء لا يمكن التراجع عنه
                </DialogDescription>

                <DialogFooter className="flex justify-center items-center w-full bg-red-300">
                    
                    <DialogClose asChild>
                        <Button className="btn-primary mx-auto">
                            اغلاق
                        </Button>
                    </DialogClose>

                </DialogFooter> 
            </DialogContent>
            
        </Dialog>
    )
}

export default Confirm