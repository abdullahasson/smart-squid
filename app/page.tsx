import OurServices from "./_sections/OurServices";
import OurVision from "./_sections/OurVision";
import OurGoals from "./_sections/OurGoals";
import SuccessPartners from "./_sections/SuccessPartners";
import Managers from "./_sections/Managers";

const User = () => {
    return (
        <div>
            {/* Our Services */}
            <OurServices />

            <hr />

            {/* Our Vision */}
            <OurVision />

            <hr />

            {/* Our Goals */}
            <OurGoals />


            <hr />

            {/* Success partners */}
            <SuccessPartners />



            <hr />

            {/*Managers*/}
            <Managers />

        </div>
    );
}

export default User
