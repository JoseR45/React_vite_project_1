import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import './section_7.css'
import CustomButton from "../button/button"
import img from '../../assets/images/img_section_7.svg'

export default function Section7(){

    return(
        <Flex height={'746px'} width={'100%'} className="section_7" >
            <Grid className="grid_7" templateColumns="repeat(2, 1fr)" gap="6">
                <div className="center_component_l_7">
                        <CustomImage w={'600px'} h={'auto'} src={img}></CustomImage>
                </div>
                <div className="center_component_r_7">
                    <TextInfo 
                    w={'600px'} 
                    h={'266px'} 
                    color='#FFFFFF' 
                    title={
                        'Launch Your App Today'
                    } 
                    text={
                        'Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.'
                    } >
                        <CustomButton name={'Free Launch'} color={'#FFFFFF, #475569'}></CustomButton>
                    </TextInfo>
                </div>
                </Grid>
        </Flex>
    )
}
