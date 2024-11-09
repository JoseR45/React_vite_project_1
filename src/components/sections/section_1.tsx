import { Flex, Grid } from "@chakra-ui/react"
import TextInfo from "../text_info/textinfo"
import CustomImage from "../image/image"
import './section_1.css'
import CustomButton from "../button/button"
import img from '../../assets/images/img_section_1.svg'

export default function Section1(){

    return(
        <Flex height={'700px'} width={'100%'} className={'section_1'}>
            <Grid className="grid_1" templateColumns="repeat(2, 1fr)" gap="6">  
                <div className="center_component_l_1">
                    <TextInfo 
                        w={'634px'} 
                        h={'353px'} 
                        color='#FFFFFF' 
                        title={'Launch Your App'} 
                        stitle={'Grow Your Business'} 
                        text={
                            'Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.'
                        } >
                        <CustomButton 
                            name={'Free Launch'} 
                            color={'#FFFFFF, #475569'}
                            />
                    </TextInfo>
                </div>
                <div className="center_component_r_1">
                        <CustomImage 
                            w={'auto'} 
                            h={'460px'} 
                            src={img}
                            />
                </div>
                </Grid>
                
        </Flex>
    )
}
