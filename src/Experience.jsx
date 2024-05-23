import { AvatarProvider } from "./context/AvatarContext";
import RoutesAventures from "./routes/RoutesAventures"

const Experience = () => {
    return (
        <AvatarProvider>
            <RoutesAventures/>
        </AvatarProvider>
    )
}

export default Experience;