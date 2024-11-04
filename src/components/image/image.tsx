import { Image } from "@chakra-ui/react"

interface CustomImageInterface {
    w: String;
    h: String;
    src: String;
    
}

export default function CustomImage({w, h, src,}: CustomImageInterface){

    return (
        <Image width={`${w}`} height={`${h}`} src={`${src}`} alt="photo" />
    )
}