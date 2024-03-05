import BuiltWork from "./BuiltWork";
import ConnectSection from "./ConnectSection";
import DesignSection from "./DesignSection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import TrustedSection from "./TrustedSection";
import WorkTogetherSection from "./WorkTogetherSection";

const Home = () =>{
    return (
        <div>
            <HeroSection></HeroSection>
            <TrustedSection></TrustedSection>
            <FeatureSection></FeatureSection>
            <WorkTogetherSection></WorkTogetherSection>
            <ConnectSection></ConnectSection>
            <DesignSection></DesignSection>
            <BuiltWork></BuiltWork>
        </div>
    )
}

export default Home;