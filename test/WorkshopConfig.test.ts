import { expect } from "chai";

import {
  createConfig,
  isConfigured,
  configSummary,
  sameNetwork,
  sameContract,
} from "../config/workshop-config";

describe("workshop config", function () {
  const config =
    createConfig(
      "https://example-rpc",
      777,
      "0xABCDEF",
    );

  it("creates a configuration", function () {
    expect(config.rpcUrl)
      .to.equal(
        "https://example-rpc",
      );

    expect(config.chainId)
      .to.equal(777);
  });

  it("trims configuration values", function () {
    const result =
      createConfig(
        "  https://example-rpc ",
        777,
        "  0xABC ",
      );

    expect(result.rpcUrl)
      .to.equal(
        "https://example-rpc",
      );

    expect(result.contractAddress)
      .to.equal("0xABC");
  });

  it("recognizes a configured environment", function () {
    expect(
      isConfigured(config),
    ).to.equal(true);
  });

  it("creates a readable summary", function () {
    const summary =
      configSummary(config);

    expect(summary)
      .to.have.length(3);

    expect(summary[1])
      .to.contain("777");
  });

  it("detects the same network", function () {
    const other =
      createConfig(
        "another-rpc",
        777,
        "0x123",
      );

    expect(
      sameNetwork(
        config,
        other,
      ),
    ).to.equal(true);
  });

  it("detects different networks", function () {
    const other =
      createConfig(
        "another-rpc",
        888,
        "0x123",
      );

    expect(
      sameNetwork(
        config,
        other,
      ),
    ).to.equal(false);
  });

  it("compares contract addresses", function () {
    const other =
      createConfig(
        "another-rpc",
        777,
        "0xabcdef",
      );

    expect(
      sameContract(
        config,
        other,
      ),
    ).to.equal(true);
  });

  it("rejects an empty rpc", function () {
    expect(() =>
      createConfig(
        "",
        777,
        "0x123",
      ),
    ).to.throw();
  });
});
