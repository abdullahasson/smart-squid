// Sections
import OurServices from "./_sections/OurServices";
import OurVision from "./_sections/OurVision";
import OurGoals from "./_sections/OurGoals";
import SuccessPartners from "./_sections/SuccessPartners";
import Managers from "./_sections/Managers";
// Components
import Navbar from "@/components/Navbar"
// Shadcn UI
import { Separator } from "@/components/ui/separator"

const User = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
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


            <Separator />
        </div>
    );
}

export default User
