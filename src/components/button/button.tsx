import { Button, Text} from "@chakra-ui/react"
import './button.css'
interface ButtonInterface {
    /** Texto del boton */
    name: String;
    /** colors: #475569, #FFFFFF */
    color: String; /**<text_color>,<background_color> */
    
    w?: String;
    h?: String;
    size?: String;
}

export default function CustomButton({name, color, w, h, size}: ButtonInterface){
    const theme = {
            color: ()=> color.split(',')[0],
            background: ()=> color.split(',')[1],

    }

    return (
        <Button border={`2px solid ${theme.color()}`} width={`${w}`} height={`${h}`} backgroundColor={`${theme.background()}`} className="button">
           <Text color={`${theme.color()}`} fontSize={`${size}`}  className="name_b">
            {name}
            </Text>
        </Button>
    )
}