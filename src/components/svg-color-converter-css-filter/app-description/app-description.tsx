import React from "react";
import {
  Box,
  Kbd,
  Text,
  Heading,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Code,
} from "@chakra-ui/core";

const AppDescription: React.FC = () => {
  return (
    <Box width="600px" m="0 auto" mt={10}>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              About
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} mt={8}>
            <Heading as="h4" size="sm" mb={3}>
              What's CSS Filter?
            </Heading>
            <Text lineHeight={7} mb={8}>
              The <Kbd>filter</Kbd> CSS property applies graphical effects like
              blur or color shift to an element. Filters are commonly used to
              adjust the rendering of images, backgrounds, and borders. More
              details on{" "}
              <Link
                title="CSS filter on MDN"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
                color="purple"
                textDecor="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN
              </Link>
              .
            </Text>

            <Heading as="h4" size="sm" mb={3}>
              What's this Application?
            </Heading>
            <Text lineHeight={7} mb={8}>
              This application converts Hex, Rgba, HSLA color to CSS filter. And
              the CSS filter could be used to change the SVG color.
              <br />
              See info about changing SVG color on this{" "}
              <Link
                title="How to change the color of an svg element?"
                href="https://stackoverflow.com/a/53336754/12966479"
                color="purple"
                textDecor="underline"
              >
                stackoverflow answer
              </Link>
              .
              <br />
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AppDescription;
