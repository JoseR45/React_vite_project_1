import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import {SECTIONS} from "../../variables/variables"
import './section_6.css'

export default function Section6(){

    return(
        <Flex height={'735px'} width={'100%'} className="section_6">
            <Grid className="grid_6" templateColumns="repeat(2, 1fr)" gap="6">
                
                <div className="center_component_l_6">
                    <TextInfo w={'702px'} h={'274px'} color='#0F172A' title={SECTIONS[6]['title']} text={SECTIONS[6]['text']} />
                </div>
                <div className="center_component_r_6">
                        <CustomImage w={'498px'} h={'auto'} src={SECTIONS[6]['img_1']}></CustomImage>
                </div>
                </Grid>
        </Flex>
    )
}
