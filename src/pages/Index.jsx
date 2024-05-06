import { useState } from "react";
import { Container, VStack, Input, Button, SimpleGrid, Image, Text, Heading } from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [logos, setLogos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchLogos = () => {
    // Simulate fetching logos based on input
    const companyNames = inputValue.split(",").map((name) => name.trim());
    const fetchedLogos = companyNames.map((name) => ({
      name,
      url: `https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JuYW1lJTdEJTIwbG9nb3xlbnwwfHx8fDE3MTUwMTQ3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080`, // This will be replaced with actual URLs in production
    }));
    setLogos(fetchedLogos);
  };

  const exportToPowerPoint = () => {
    // Simulate exporting to PowerPoint
    console.log("Exporting logos to PowerPoint...");
  };

  return (
    <Container centerContent maxW="container.xl" py={8}>
      <VStack spacing={6} width="full">
        <Heading as="h1" size="xl">
          Logo Formatter for Investment Bankers
        </Heading>
        <Text>Enter company names or domains separated by commas:</Text>
        <Input placeholder="e.g., Apple, Google, Microsoft" value={inputValue} onChange={handleInputChange} size="lg" />
        <Button leftIcon={<FaFileExport />} colorScheme="blue" onClick={fetchLogos}>
          Fetch Logos
        </Button>
        <SimpleGrid columns={3} spacing={4} width="full">
          {logos.map((logo, index) => (
            <VStack key={index}>
              <Image src={logo.url} alt={logo.name} boxSize="100px" objectFit="contain" />
              <Text fontSize="sm">{logo.name}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        {logos.length > 0 && (
          <Button leftIcon={<FaFileExport />} colorScheme="green" onClick={exportToPowerPoint}>
            Export to PowerPoint
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
