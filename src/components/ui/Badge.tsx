type Variant = "default" | "en-diseno" | "en-estudio" | "en-construccion";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
}

const dotColor: Record<Variant, string> = {
  default: "#dbc56c",
  "en-construccion": "#7bab5f",
  "en-diseno": "#abc2d9",
  "en-estudio": "#F38163",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center gap-1 border-[0.382px] border-text-primary rounded-full px-3 py-1 font-sans text-[12px] font-semibold text-text-primary whitespace-nowrap">
      <span
        className="shrink-0 rounded-full"
        style={{ width: "15px", height: "15px", backgroundColor: dotColor[variant] }}
      />
      {children}
    </span>
  );
}
