import { Button, PacketsDesignTokenProvider } from "@esnet/packets-ui";
import * as designtokens from "@esnet/esnet-tokens";

export default function Page() {
  console.log("designtokens", designtokens);

  return (
    <PacketsDesignTokenProvider>
      <Button variant={"primary"}>Hello World</Button>
      <h1 className="test">Test Page</h1>
    </PacketsDesignTokenProvider>
  );
}
