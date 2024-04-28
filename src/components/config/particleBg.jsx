import Particles from "@tsparticles/react";
import particleConfig from "./particleConfig";

const ParticleBg = () => {
    return (
        <div>
            <Particles params={particleConfig}></Particles>
        </div>
    );
};

export default ParticleBg;