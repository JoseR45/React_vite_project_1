import { Flex, Grid, Heading } from "@chakra-ui/react"
import './section_3.css'
import Target from "../target/target"
import CustomImage from "../image/image"
import icon1 from '../../assets/images/icons/icon1.svg'
import icon2 from '../../assets/images/icons/icon2.svg'
import icon3 from '../../assets/images/icons/icon3.svg'

export default function ProcessOverview(){

    return(
        <Flex height={'590px'} width={'100%'} className="section_3">
            <Grid className="grid_3" templateColumns="repeat(1, 1fr)" gap="6">
                <Flex className="flex_2">
                    <Heading  className="title_3">
                        How it works
                    </Heading>
                    <Grid  className="grid_3_3" templateColumns="repeat(3, 1fr)" gap="6px">
                       <Target 
                       text={'Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.'}
                       icon={<CustomImage w={'64px'} h={'64px'} src={icon1}/>}></Target>
                       <Target 
                       text={'Et sit duis vestibulum proin. Sollicitudin velit, etiam a feugiat sagittis. Imperdiet ipsum urna ornare vitae tempus sed massa.'}
                       icon={<CustomImage w={'64px'} h={'64px'} src={icon2}/>}></Target>
                       <Target 
                       text={'Elit purus magna donec mattis amet, leo varius sed. Ut metus sed convallis pretium sollicitudin turpis semper vulputate.'}
                       icon={<CustomImage w={'64px'} h={'64px'} src={icon3}/>}></Target>
                    </Grid>
                </Flex>
                </Grid>
        </Flex>
    )
}
