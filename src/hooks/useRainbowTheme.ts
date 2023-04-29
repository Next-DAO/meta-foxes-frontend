import { lightTheme } from "@rainbow-me/rainbowkit";
import { useMemo } from "react";
import { useRouter } from "next/router";

export const useRainbowTheme = () => {
  const router = useRouter();
  const isZhCn = router.locale === "zh";

  const theme = useMemo(() => {
    const theme = lightTheme();
    theme.radii.connectButton = "1000px";
    theme.shadows.connectButton = "0 0 0 4px black;";
    theme.colors.accentColor = "#FF9321";
    theme.colors.accentColorForeground = "#000";

    return theme;
  }, []);

  return theme;
};
