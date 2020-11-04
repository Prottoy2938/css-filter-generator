import Head from "next/head";
import { Box, Heading } from "@chakra-ui/core";
import ColorPicker from "../src/components/color-picker/color-picker";
import React, { useState, useEffect } from "react";
import AppDescription from "../src/components/app-description/app-description";
import CSSFilterOutput from "../src/components/css-filter-output/css-filter-output";
import { Color, Solver } from "../src/algorithm/hex-to-css-filter";
import SVGChangeDemo from "../src/components/svg-change-demo/svg-change-demo";

const defaultColor = {
  r: 38,
  g: 23,
  b: 112,
};

const Home: React.FC = () => {
  const [color, setColor] = useState(defaultColor);
  const [cssFilterValue, setCssFilterValue] = useState("");

  useEffect(() => {
    const modifiedColorFormat = new Color(color.r, color.g, color.b);
    const solver = new Solver(modifiedColorFormat);
    const result = solver.solve();
    const filterCSS = result.filter;
    setCssFilterValue(filterCSS);
    console.log(result.loss);
  }, [color]);

  return (
    <>
      <Head>
        <title>Color Format to CSS Filter | Reative</title>
      </Head>
      <Heading textAlign="center" as="h1" mt={2}>
        Color Format to CSS Filter
      </Heading>
      <Box justifyContent="center" alignItems="center" m="0 auto">
        <AppDescription />
        <ColorPicker setColor={setColor} color={color} />
        <SVGChangeDemo cssFilterValue={cssFilterValue} />
        <CSSFilterOutput cssFilterValue={cssFilterValue} />
      </Box>
    </>
  );
};

export default Home;
