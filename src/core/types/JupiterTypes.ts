// src/core/types/jupiter/JupiterTypes.ts

export interface QuoteResponse {
    inputMint: string;
    inAmount: string;
    outputMint: string;
    outAmount: string;
    otherAmountThreshold: string;
    swapMode: "ExactIn" | "ExactOut";
    slippageBps: number;
    priceImpactPct: string;
    routePlan: RoutePlan[];
    contextSlot?: number;
    timeTaken?: number;
  }
  
  interface RoutePlan {
    swapInfo: SwapInfo;
    percent: number;
  }
  
  interface SwapInfo {
    ammKey: string;
    label?: string;
    inputMint: string;
    outputMint: string;
    inAmount: string;
    outAmount: string;
    feeAmount: string;
    feeMint: string;
  }
  
  export interface JupiterSwapParams {
    userPublicKey: string;
    wrapAndUnwrapSol?: boolean;
    useSharedAccounts?: boolean;
    dynamicComputeUnitLimit?: boolean;
    skipUserAccountsRpcCalls?: boolean;
    quoteResponse: QuoteResponse;
    dynamicSlippage?: {
      minBps: number;
      maxBps: number;
    };
    priorityLevel?: {
      type: "none" | "low" | "medium" | "high" | "very-high";
      maxLamports?: number;
    };
  }