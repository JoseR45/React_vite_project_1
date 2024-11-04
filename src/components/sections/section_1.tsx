import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import {SECTIONS} from "../../variables/variables"
import './section_1.css'
import CustomButton from "../button/buton"


export default function Section1(){

    return(
        <Flex height={'700px'} width={'100%'} className="section_1">
            <Grid className="grid_1" templateColumns="repeat(2, 1fr)" gap="6">  
                <div className="center_component_l_1">
                    <TextInfo w={'634px'} h={'353px'} color='#FFFFFF' title={SECTIONS[1]['title']} text={SECTIONS[1]['text']} stitle={SECTIONS[1]['stitle']} >
                        <CustomButton name={'Free Launch'} color={'#FFFFFF'} background={'#475569'}></CustomButton>
                    </TextInfo>
                </div>
                <div className="center_component_r_1">
                        <CustomImage w={'auto'} h={'460px'} src={SECTIONS[1]['img_1']}></CustomImage>
                </div>
                </Grid>
        </Flex>
    )
}
