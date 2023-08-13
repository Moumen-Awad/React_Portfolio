import { React, useState } from "react";
import { Box, HStack, Button, Text, VStack } from '@chakra-ui/react'
import { useLang } from "../LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const items = [
    {
        source: "/Project1.jpg",
        alt: "Porject 1",
        en_title: "Human Resources Managment System",
        en_details: "Project 1",
        ar_title: "نظام إدارة الموارد البشرية",
        ar_details: "المشروع الأول"
    },
    {
        source: "/Project2.jpg",
        alt: "Porject 2",
        en_title: "Electronic Invoice",
        en_details: "Project 2",
        ar_title: "الفاتورة الإلكترونية",
        ar_details: "المشروع الثاني"
    },
    {
        source: "/Project3.jpg",
        alt: "Porject 3",
        en_title: "Little Lemon Landing Page",
        en_details: "Project 3",
        ar_title: "صفحة هبوط لمطعم",
        ar_details: "المشروع الثالث"
    }
]

const Slider = () => {

    const [ SliderIndex, setSliderIndex ] = useState(1);

    const { lang } = useLang();

    const MoveRight = () => {
        const NextIndex = SliderIndex + 1 === items.length ? 0 : SliderIndex + 1;
        setSliderIndex(NextIndex);
    }

    const MoveLeft = () => {
        const NextIndex = SliderIndex - 1  === -1 ? items.length - 1 : SliderIndex - 1;
        setSliderIndex(NextIndex);
    }

    const SliderImage = {
        borderRadius: "10px",
        border: "solid #2e2815 4px",
        width: "1000px",
        height: "500px",
        backgroundImage: `url(${items[SliderIndex].source})`,
        backgroundSize: "cover",
        alt: `${items[SliderIndex].alt}`
    }

    return (
        <Box>
            <HStack>
                <Button onClick={MoveLeft} as="a" cursor="pointer" _hover={{color: "#f4ac01"}} fontSize={25}><FontAwesomeIcon icon={ lang === "en" ? faChevronLeft : faChevronRight } size="2x" /></Button>
                <VStack>
                    <Box style={SliderImage}></Box>
                    <Text _selection={{color:"black", backgroundColor:"#f4ac01"}}>
                        { lang === "en" ? (`${items[SliderIndex].en_title} : ${items[SliderIndex].en_details}`) : (`${items[SliderIndex].ar_title} : ${items[SliderIndex].ar_details}`) }
                    </Text>                
                </VStack>    
                <Button onClick={MoveRight} as="a" cursor="pointer" _hover={{color: "#f4ac01"}} fontSize={25}><FontAwesomeIcon icon={ lang === "en" ? faChevronRight : faChevronLeft } size="2x" /></Button>
            </HStack>
        </Box>
    );
}

export default Slider;