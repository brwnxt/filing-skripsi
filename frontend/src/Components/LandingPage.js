import Navigation from "./Navigation";
import InitialSection from "./InitialSection";
import About from "./About";
import Materi from "./Materi";
import Faq from "./Faq";
import ContactPerson from "./ContactPerson";

const LandingPage = ()=>{
    return(
        <>
        <Navigation/>
        <InitialSection/>
        <About/>
        <Materi/>
        <Faq/>
        <ContactPerson/>
        </>
    )
}

export default LandingPage;