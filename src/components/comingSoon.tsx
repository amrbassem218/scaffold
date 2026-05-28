import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function ComingSoon({ children, disabled }: Props) {
  return (
    <div className="inline-flex h-full items-center justify-center align-middle">
      {!disabled ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="m-0 inline-flex h-full items-center p-0">
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent className="bg-bg">
            <p className="text-text text-sm">Coming soon!!...</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
