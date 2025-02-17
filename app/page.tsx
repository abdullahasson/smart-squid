// Sections
import OurServices from "./_sections/OurServices";
import OurVision from "./_sections/OurVision";
import OurGoals from "./_sections/OurGoals";
import SuccessPartners from "./_sections/SuccessPartners";
import Managers from "./_sections/Managers";
// Shadcn UI
import { Separator } from "@/components/ui/separator"

const User = () => {
    return (
        <div>
            {/* Our Services */}
            <OurServices />

            <Separator />

            {/* Our Vision */}
            <OurVision />

            <Separator />

            {/* Our Goals */}
            <OurGoals />


            <Separator />

            {/* Success partners */}
            <SuccessPartners />



            <Separator />

            {/*Managers*/}
            <Managers />

        </div>
    );
}

export default User
