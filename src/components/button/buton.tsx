import { Button, Text} from "@chakra-ui/react"
import './button.css'
interface ButtonInterface {
    /** Texto del boton */
    name: String;
    /** colors: #475569, #FFFFFF */
    color: String;
    
    background: String;

    w?: String;
    h?: String;
    size?: String;
}

export default function CustomButton({name, color, background, w, h, size}: ButtonInterface){
    
    return (
        <Button border={`2px solid ${color}`} width={`${w}`} height={`${h}`} backgroundColor={`${background}`} className="button">
           <Text color={`${color}`} fontSize={`${size}`}  className="name_b">
            {name}
            </Text>
        </Button>
    )
}