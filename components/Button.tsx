import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 rounded-full px-5 font-medium text-xs md:text-2xl font-['Lexend']"
      style="background-color: #ACBCB1; color: #4F7158"
    />
  );
}
