import { Card, Flex, Grid, Heading } from "@chakra-ui/react"
import './section_6.1.css'
import { useTargetInfo } from "@/custom_hooks/use_target_info"


export default function Comments(){
    const data = useTargetInfo()
    return(
        <Flex height={'735px'} width={'100%'} className="section_61">
            <Heading  className="title_3">
            Publications 
            </Heading>
            <Grid className="grid_61" templateColumns="repeat(3, 1fr)" gap="6">
                {data.slice(0, 6).map((data_)=>{
               return (
                <Card.Root size="sm" border={'0px'}  backgroundColor={'#475569'}>
                    <Card.Header>
                        <Heading size="md">{data_.title}</Heading>
                    </Card.Header>
                    <Card.Body color="fg.muted">
                        {data_.body}
                    </Card.Body>
              </Card.Root>
               )
                }
                )}
               
                </Grid>
        </Flex>
    )
}
