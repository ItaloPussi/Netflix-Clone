import { FaqsContainer } from "../containers/Faqs";
import { FooterContainer } from "../containers/Footer";
import { JumbotronContainer } from "../containers/Jumbotron";
import { HeaderContainer } from "../containers/Header";
import { Feature, OptForm } from "../components";

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter you email to create or restart your membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />            
        </>
    )
}
export default Home