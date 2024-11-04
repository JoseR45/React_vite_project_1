import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import {SECTIONS} from "../../variables/variables"
import './section_7.css'
import CustomButton from "../button/buton"


export default function Section7(){

    return(
        <Flex height={'746px'} width={'100%'} className="section_7" backgroundImage={SECTIONS[7]['img_2']}>
            <Grid className="grid_7" templateColumns="repeat(2, 1fr)" gap="6">
                <div className="center_component_l_7">
                        <CustomImage w={'600px'} h={'auto'} src={SECTIONS[7]['img_1']}></CustomImage>
                </div>
                <div className="center_component_r_7">
                    <TextInfo w={'600px'} h={'266px'} color='#FFFFFF' title={SECTIONS[7]['title']} text={SECTIONS[7]['text']} >
                        <CustomButton name={'Free Launch'} color={'#FFFFFF'} background={'#475569'}></CustomButton>
                    </TextInfo>
                </div>
                </Grid>
        </Flex>
    )
}
