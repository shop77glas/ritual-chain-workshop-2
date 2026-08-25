export type WorkshopConfig = {
  rpcUrl: string;
  chainId: number;
  contractAddress: string;
};

export function createConfig(
  rpcUrl: string,
  chainId: number,
  contractAddress: string,
): WorkshopConfig {
  if (!rpcUrl.trim()) {
    throw new Error(
      "RPC URL is required",
    );
  }

  if (chainId <= 0) {
    throw new Error(
      "chain id must be positive",
    );
  }

  if (!contractAddress.trim()) {
    throw new Error(
      "contract address is required",
    );
  }

  return {
    rpcUrl: rpcUrl.trim(),
    chainId,
    contractAddress:
      contractAddress.trim(),
  };
}

export function isConfigured(
  config: WorkshopConfig,
): boolean {
  return (
    config.rpcUrl.length > 0 &&
    config.chainId > 0 &&
    config.contractAddress.length > 0
  );
}

export function configSummary(
  config: WorkshopConfig,
): string[] {
  return [
    `RPC: ${config.rpcUrl}`,
    `Chain ID: ${config.chainId}`,
    `Contract: ${config.contractAddress}`,
  ];
}

export function sameNetwork(
  first: WorkshopConfig,
  second: WorkshopConfig,
): boolean {
  return (
    first.chainId ===
    second.chainId
  );
}

export function sameContract(
  first: WorkshopConfig,
  second: WorkshopConfig,
): boolean {
  return (
    first.contractAddress.toLowerCase() ===
    second.contractAddress.toLowerCase()
  );
}
