import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TextResponse = {
  status: boolean;
  message: string;
};

export type ErrorResponse = {
  message: string;
  status: boolean;
  status_code: number;
};
