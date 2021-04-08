import { FaqsContainer } from "../containers/Faqs";
import { FooterContainer } from "../containers/Footer";
import { JumbotronContainer } from "../containers/Jumbotron";

const Home = () => {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
export default Home