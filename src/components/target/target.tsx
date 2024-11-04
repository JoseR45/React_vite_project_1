import { Flex, Text} from "@chakra-ui/react";
import './taget.css'

interface TargetInterface {
    text: String;
    icon: React.ReactNode;
}

export default function Target({text, icon}: TargetInterface){
    return(
        <Flex className="flex_target">
                {icon}
                <Text className="text_target">
                    {text}
                </Text>
       
        </Flex>
    )
}