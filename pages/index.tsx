import Head from "next/head";
import { Box, Heading } from "@chakra-ui/core";
import ColorPicker from "../src/components/svg-color-converter-css-filter/color-picker/color-picker";
import React, { useState, useEffect } from "react";
import AppDescription from "../src/components/svg-color-converter-css-filter/app-description/app-description";
import CSSFilterOutput from "../src/components/svg-color-converter-css-filter/css-filter-output/css-filter-output";
import { Color, Solver } from "../src/algorithm/hex-to-css-filter";
import SVGChangeDemo from "../src/components/svg-color-converter-css-filter/svg-change-demo/svg-change-demo";
import Drawer from "../src/components/svg-color-converter-css-filter/drawer/drawer";

const defaultColor = {
  r: 38,
  g: 23,
  b: 112,
};

const Home: React.FC = () => {
  const [color, setColor] = useState(defaultColor);
  const [cssFilterValue, setCssFilterValue] = useState("");
  const [lossInfo, setLossInfo] = useState({
    loss: 0,
    lossMsg: "This is perfect",
  });

  useEffect(() => {
    const modifiedColorFormat = new Color(color.r, color.g, color.b);
    const solver = new Solver(modifiedColorFormat);
    const result = solver.solve();
    const filterCSS = result.filter;
    setCssFilterValue(filterCSS);
    if (result.loss < 1) {
      setLossInfo({ loss: result.loss, lossMsg: "This is perfect" });
    } else if (result.loss < 5) {
      setLossInfo({ loss: result.loss, lossMsg: "This is close enough" });
    } else if (result.loss < 15) {
      setLossInfo({
        loss: result.loss,
        lossMsg: "This color is somewhat off. Consider trying different color.",
      });
    } else {
      setLossInfo({
        loss: result.loss,
        lossMsg: "This color is extremely off. Try different color",
      });
    }
  }, [color]);

  return (
    <>
      <Head>
        <title>Change SVG Color Using CSS Filter</title>
        <link rel="shortcut icon" href="/logo.svg" />
        <meta
          name="description"
          content="Change color of a svg using CSS filter"
        />
        <meta
          name="og:description"
          content="Change color of a svg using CSS filter"
        />
        <meta
          property="og:image"
          content="https://change-svg-color.vercel.app/app-preview.jpg"
        />
      </Head>
      <Heading textAlign="center" as="h1" mt={2}>
        Change SVG Color Using CSS Filter
      </Heading>
      <Box justifyContent="center" alignItems="center" m="0 auto">
        <AppDescription />
        <Drawer />
        <ColorPicker setColor={setColor} color={color} />
        <SVGChangeDemo cssFilterValue={cssFilterValue} lossInfo={lossInfo} />
        <CSSFilterOutput cssFilterValue={cssFilterValue} />
      </Box>
    </>
  );
};

export default Home;
