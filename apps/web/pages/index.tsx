import { ESButton, PacketsDesignTokenProvider } from "@esnet/packets-ui";

export default function Page() {
  return (
    <PacketsDesignTokenProvider>
      <ESButton variant={"primary"}>Hello World</ESButton>
      <h1 className="test">Test Page</h1>
    </PacketsDesignTokenProvider>
  );
}
