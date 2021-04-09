import { createContext, useContext, useState } from 'react'
import {Container, Inner, Title, Item, Header, Body} from './styles/'

const ToggleContext = createContext()

const Accordion = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return (
        <Header 
            onClick={()=> setToggleShow((prevState) => !prevState)} 
            {...restProps}
        >
            {children}
            {toggleShow ? (
                <img src="../images/icons/close-slim.png" alt="close" />
            ) : (
                <img src="../images/icons/add.png" alt="open" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext)
    return toggleShow ? <Body{...restProps}>{children}</Body> : null
}

export default Accordion
