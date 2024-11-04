import { Button, Flex } from "@chakra-ui/react";
import { Stack, Text } from "@chakra-ui/react"
import './section_menu.css'
import CustomButton from "../button/buton";


export default function Menu(){

    

    return(
        <Flex height={'101px'} width={'100%'} className="section_menu" >
            <div className="container_menu">
            <Stack className="container_name">
                <Text className="name">mabi</Text>
            </Stack>
            <Flex width={'50%'} className="flex_menu">

               <Button className="button_menu_section selected">Home</Button>
               <Button className="button_menu_section">Solutions</Button>
               <Button className="button_menu_section">Pricing</Button>
               
               <select className="button_menu_section select"  >
                <option value="resources" selected>Resources</option>
                <option value="resource1" selected>Resource_1</option>
                <option value="resource2" selected>Resource_2</option>

               </select>
                        
            </Flex>
            <Flex width={'50%'} className="flex_buttons">
                <div className="button_group">
                <CustomButton name={'Log In'} color={'#FFFFFF'} w={'103px'} h={'100%'} size={'16px'} background={'#475569'}></CustomButton>
                <CustomButton name={'Free Launch'} color={'#475569'} w={'149px'} size={'16px'} h={'100%'} background={'#FFFFFF'}></CustomButton>
                </div>
            </Flex>
            </div>
        </Flex>
    )
}