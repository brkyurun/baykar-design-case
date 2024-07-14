import dynamic from "next/dynamic";
import { ReactNode } from "react";

const NoSsr = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
