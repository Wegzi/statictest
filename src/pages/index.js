import React, { useState } from "react"
import { Container, CardContainer, Col, Section } from "./styles"
import { Button } from "../Components/Button"
import { Header } from "../Components/layout/Header"
import { Card } from "../Components/Card"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header />
      <CardContainer>
        <Col>
          <Card>OI</Card>
        </Col>
        <Col>
          <Card>OI</Card>
        </Col>
      </CardContainer>
      <Container>
        <Button onClick={() => setIsOpen(!isOpen)}>Button</Button>
        <Section>{isOpen ? "aberto" : "fechado"}</Section>
      </Container>
    </>
  )
}
