import "./textinfo.css"
import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react"


interface TextInfoProps {
     /** Título que se mostrará en el componente */
    title: String;
    /** Texto principal que describe el contenido del componente */
    text: String;
    /**Un boton en caso de llevarlo */
    children?: React.ReactNode;
    /** color: #0F172A, #FFFFFF*/
    color: String;
    
    w: String;
    h: String;

    stitle?: String;
}

/**
 * Componente TextInfo
 *
 * Este componente muestra un título, un texto principal y opcionalmente puede
 * incluir un boton en cado de llevarlo mediante `children`.
 *
 * @param {TextInfoProps} props - Las props del componente
 * @param {string} props.title - El título a mostrar en el componente
 * @param {string} props.text - El texto principal del componente
 * @param {React.ReactNode} [props.children] - Un boton en caso de llevarlo
 * 
 * @returns {JSX.Element} Elemento JSX que representa el componente TextInfo
 */

export default function TextInfo({title, text, children, color, w, h, stitle}: TextInfoProps){
   

    return (
        <Stack width={`${w}`} height={`${h}`} className="container">
            <Heading color={`${color}`} className="title">
            {title}
            </Heading>
            {stitle&&
            <Heading color={`#CBD5E1`} className="title stitle">
            {stitle}
            </Heading>
            }
            <Text color={`${color}`} className="text">
            {text}
            </Text>
            {children}
        </Stack>
    );
}



