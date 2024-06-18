import { Button, PacketsDesignTokenProvider } from "@esnet/packets-ui";

export default function Page() {
  return (
    <PacketsDesignTokenProvider>
      <Button variant={"primary"}>Hello World</Button>
      <h1>Test Page</h1>
    </PacketsDesignTokenProvider>
  );
}
