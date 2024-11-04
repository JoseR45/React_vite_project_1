import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import {SECTIONS} from "../../variables/variables"
import './section_5.css'

export default function Section5(){

    return(
        <Flex height={'735px'} width={'100%'} className="section_5">
            <Grid className="grid_5" templateColumns="repeat(2, 1fr)" gap="6">
                <div className="center_component_l_5">
                    <div className="group_img_5">
                        <div className="img_2_5">
                            <CustomImage w={'331px'} h={'339px'} src={SECTIONS[5]['img_2']} />
                        </div>
                        <CustomImage w={'305.08px'} h={'595px'} src={SECTIONS[5]['img_1']}></CustomImage>
                    </div>
                </div>
                <div className="center_component_r_5">
                    <TextInfo w={'831.92px'} h={'310px'} color='#0F172A' title={SECTIONS[5]['title']} text={SECTIONS[5]['text']} />
                </div>
                    
                </Grid>
        </Flex>
    )
}
