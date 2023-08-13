import { Text } from "@chakra-ui/react";
import { useLang } from "../LangContext";

const Title = (probs) => {

    const { lang } = useLang();

    const TitleStyle = {
        marginTop: "25px",
        marginBottom: "25px",
        fontSize: "50px",
        borderBottomStyle: "dotted", 
        borderBottomWidth: "10px",
    }

    const TitleStyle1 = {
        background: "#f4ac01",
    }

    return (
        <Text style={TitleStyle} _selection={TitleStyle1}>
            {lang === "en" ? probs.text.en : probs.text.ar}
        </Text>
    );
}

export default Title;