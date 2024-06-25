import { Slider } from "@/components/ui/slider";

type Props = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
};

export default function CustomSlider({
  value,
  onChange,
  min,
  max,
  step = 5,
}: Props) {
  return (
    <div className="flex items-end space-x-4">
      <div className="flex flex-col flex-1">
        <div className="w-full h-6 relative mb-1">
          <div
            className="text-xs font-mono absolute p-0.5 rounded bg-gray-200 text-center"
            style={{
              width: "40px",
              left: `${((value - min) / (max - min)) * 100}%`,
              transform: `translateX(${
                -25 * (1 + 2 * ((value - min) / (max - min)))
              }%)`,
            }}
          >
            {value}
          </div>
        </div>
        <Slider
          step={step}
          min={min}
          max={max}
          value={[value]}
          onValueChange={(val) => onChange(val[0])}
        />
        <div className="flex justify-between mt-2">
          <div className="flex-shrink-0 text-xs font-mono">{min}</div>
          <div className="flex-shrink-0 text-xs font-mono">{max}</div>
        </div>
      </div>
    </div>
  );
}
