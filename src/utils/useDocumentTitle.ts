import { useEffect } from "react";

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const baseTitle = "Patrick Okafor — Backend & Solana Engineer";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [title]);
};
