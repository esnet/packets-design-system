import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

console.log("Extending style-dictionary");
console.log("\n==============================================");

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: "all",
    buildPath: "dist/",
    transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "color/hex",
        "size/pxToRem",
        // "typography/shorthand",
        "duration/units"
    ]
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

StyleDictionary.registerTransform({
  name: "duration/units",
  type: "value",
  matcher: (token) => token.path.includes("duration"),
  transformer: (token) => {
    const { value, type } = token;
    return `${value}${type}`
  }
})

StyleDictionary.registerFormat({
  name: "typings/es6",
  formatter: (args) => {
    console.log("args", args.allProperties);
    const types = args.allProperties.map(
      (prop) => `export const ${prop.name}: string;`,
    );
    return types.join("\r\n");
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
