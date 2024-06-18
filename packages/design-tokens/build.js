import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

console.log("Extending style-dictionary");
console.log("\n==============================================");

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: "all",
    buildPath: "dist/",
  }),
);

console.log("Build started...");
console.log("\n==============================================");

// REGISTER THE CUSTOM TRANSFORMS
StyleDictionary.registerTransform({
  name: "typography/shorthand",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "typography",
  transformer: (token) => {
    const { value } = token;
    return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`;
  },
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend("./config.json");

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
