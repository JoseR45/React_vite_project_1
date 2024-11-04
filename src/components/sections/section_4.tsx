import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import {SECTIONS} from "../../variables/variables"
import './section_4.css'

export default function Section4(){

    return(
        <Flex height={'507px'} width={'100%'} className="section">
            <Grid className="grid" templateColumns="repeat(2, 1fr)" gap="6">
                <div className="center_component_l">
                    <TextInfo w={'611px'} h={'238px'} color='#0F172A' title={SECTIONS[4]['title']} text={SECTIONS[4]['text']} />
                </div>
                    <div className="center_component_r">
                        <div className="group_img">
                            <div className="img_2">
                                <CustomImage w={'180px'} h={'auto'} src={SECTIONS[4]['img_2']} />
                            </div>
                            <CustomImage w={'553px'} h={'auto'} src={SECTIONS[4]['img_1']}></CustomImage>
                        </div>
                    </div>
                </Grid>
        </Flex>
    )
}