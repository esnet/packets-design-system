import type { Meta, StoryObj } from "@storybook/react";

/**
 * Demonstrates the default styling for h1-h6 elements as provided by the design system stylesheet.
 */
const meta: Meta = {
  title: "RichText/Headings",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Headings: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(6, auto)",
        gap: "2rem",
      }}
    >
      <h1>Heading 1</h1>
      <h1 className="accent">Heading 1</h1>
      <h1 className="accent2">Heading 1</h1>

      <h2>Heading 2</h2>
      <h2 className="accent">Heading 2</h2>
      <h2 className="accent2">Heading 2</h2>

      <h3>Heading 3</h3>
      <h3 className="accent">Heading 3</h3>
      <h3 className="accent2">Heading 3</h3>

      <h4>Heading 4</h4>
      <h4 className="accent">Heading 4</h4>
      <h4 className="accent2">Heading 4</h4>

      <h5>Heading 5</h5>
      <h5 className="accent">Heading 5</h5>
      <h5 className="accent2">Heading 5</h5>

      <h6>Heading 6</h6>
      <h6 className="accent">Heading 6</h6>
      <h6 className="accent2">Heading 6</h6>
    </div>
  ),
};

export const HeadingLink: Story = {
  render: () => (
    <h3>
      <a href="/">Packets</a>
    </h3>
  ),
};

export const Example: Story = {
  render: () => (
    <div>
      <h1>Parts of Terranova Docs</h1>
      <h2>Key Concepts</h2>

      <h3>Datasets</h3>
      <p>
        A Dataset is a representation of a query against a datasource. The
        Dataset represents the set of network information to be plotted on your
        map.
      </p>

      <h2>FAQ</h2>

      <h3>I can't log in! How do I get access?</h3>
      <p>
        Currently, you need to be assigned a permission by a Keycloak
        administrator.
      </p>

      <h3>I have a question that's not covered below. Who can I ask?</h3>
      <p>
        Try the <code>#terranova</code> slack channel.
      </p>

      <h3>What's Zero Trust?</h3>
      <p>Zero trust is a loosely-defined concept.</p>

      <h3>How does Keycloak Work?</h3>
      <p>
        Keycloak is an authentication and authorization suite. It supports many
        authentication protocols, including, but not limited to OpenID Connect
        (OIDC). Generally, we use Keycloak as an OIDC provider to handle
        authentication and some limited authorization functionality. In the
        future, we expect to expand the set of products utilized internally at
        es.net to provide a more robust authorization scheme.
      </p>

      <h3>Why is this application in a Zero Trust Posture?</h3>
      <p>
        Because maps can include an arbitrary amount of detail, they need to be
        consumed in both trusted and untrusted contexts. Putting this
        application in a public, but zero-trust posture allows it to serve both
        authenticated and fully public contexts.
      </p>
    </div>
  ),
};
