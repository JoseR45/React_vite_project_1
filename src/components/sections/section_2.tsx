import { Flex, Grid, Heading } from "@chakra-ui/react"
import CustomImage from "../image/image"
import './section_2.css'
import img1 from '../../assets/images/logos_1/Logo-colored.svg'
import img2 from '../../assets/images/logos_1/Logo-colored-1.svg'
import img3 from '../../assets/images/logos_1/Logo-colored-2.svg'
import img4 from '../../assets/images/logos_1/Logo-colored-3.svg'
import img5 from '../../assets/images/logos_1/Logo-colored-4.svg'
import img21 from '../../assets/images/logos_2/Logo-colored.svg'
import img22 from '../../assets/images/logos_2/Logo-colored-1.svg'
import img23 from '../../assets/images/logos_2/Logo-colored-2.svg'
import img24 from '../../assets/images/logos_2/Logo-colored-3.svg'
import img25 from '../../assets/images/logos_2/Logo-colored-4.svg'

export default function Section2(){

    return(
        <Flex height={'479px'} width={'100%'} className="section_2">
            <Grid className="grid_2" templateColumns="repeat(1, 1fr)" gap="6">
                <Flex className="flex_2">
                    <Heading  className="title_2">
                        Our Top Partners
                    </Heading>
                    <Flex direction={'row'} justifyContent={'center'}>
                        <div className="c_2_min">
                            <CustomImage w={'138px'} h={'auto'} src={img1}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img2}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img3}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img4}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img5}></CustomImage>
                        </div>
                    </Flex>
                    <Flex direction={'row'} justifyContent={'center'}>
                        <div className="c_2_min_1">
                            <CustomImage w={'138px'} h={'auto'} src={img21}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img22}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img23}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img24}></CustomImage>
                            <CustomImage w={'138px'} h={'auto'} src={img25}></CustomImage>
                        </div>
                    </Flex>
                </Flex>
                </Grid>
        </Flex>
    )
}
