"use client";

import * as React from "react";
import { CaretUpDown, Check } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type Country = {
  iso: string;
  name: string;
};

const countries: Country[] = [
  {
    iso: "ALL",
    name: "All countries",
  },
  {
    iso: "DZ",
    name: "Algeria",
  },
  {
    iso: "AO",
    name: "Angola",
  },
  {
    iso: "BJ",
    name: "Benin",
  },
  {
    iso: "BW",
    name: "Botswana",
  },
  {
    iso: "BF",
    name: "Burkina Faso",
  },
  {
    iso: "BI",
    name: "Burundi",
  },
  {
    iso: "CV",
    name: "Cabo Verde",
  },
  {
    iso: "CM",
    name: "Cameroon",
  },
  {
    iso: "CF",
    name: "Central African Republic",
  },
  {
    iso: "TD",
    name: "Chad",
  },
  {
    iso: "KM",
    name: "Comoros",
  },
  {
    iso: "CD",
    name: "Democratic Republic of the Congo",
  },
  {
    iso: "CG",
    name: "Republic of the Congo",
  },
  {
    iso: "CI",
    name: "Cote D'Ivoire",
  },
  {
    iso: "DJ",
    name: "Djibouti",
  },
  {
    iso: "EG",
    name: "Egypt",
  },
  {
    iso: "GQ",
    name: "Equatorial Guinea",
  },
  {
    iso: "ER",
    name: "Eritrea",
  },
  {
    iso: "ET",
    name: "Ethiopia",
  },
  {
    iso: "GA",
    name: "Gabon",
  },
  {
    iso: "GH",
    name: "Ghana",
  },
  {
    iso: "GM",
    name: "Gambia",
  },
  {
    iso: "GN",
    name: "Guinea",
  },
  {
    iso: "GW",
    name: "Guinea-Bissau",
  },
  {
    iso: "KE",
    name: "Kenya",
  },
  {
    iso: "LS",
    name: "Lesotho",
  },
  {
    iso: "LR",
    name: "Liberia",
  },
  {
    iso: "LY",
    name: "Libya",
  },
  {
    iso: "MG",
    name: "Madagascar",
  },
  {
    iso: "MW",
    name: "Malawi",
  },
  {
    iso: "ML",
    name: "Mali",
  },
  {
    iso: "MR",
    name: "Mauritania",
  },
  {
    iso: "MU",
    name: "Mauritius",
  },
  {
    iso: "MA",
    name: "Morocco",
  },
  {
    iso: "MZ",
    name: "Mozambique",
  },
  {
    iso: "NA",
    name: "Namibia",
  },
  {
    iso: "NE",
    name: "Niger",
  },
  {
    iso: "NG",
    name: "Nigeria",
  },
  {
    iso: "RW",
    name: "Rwanda",
  },
  {
    iso: "ST",
    name: "Sao Tome And Principe",
  },
  {
    iso: "SN",
    name: "Senegal",
  },
  {
    iso: "SC",
    name: "Seychelles",
  },
  {
    iso: "SL",
    name: "Sierra Leone",
  },
  {
    iso: "SO",
    name: "Somalia",
  },
  {
    iso: "ZA",
    name: "South Africa",
  },
  {
    iso: "SS",
    name: "South Sudan",
  },
  {
    iso: "SD",
    name: "Sudan",
  },
  {
    iso: "SZ",
    name: "Eswatini",
  },
  {
    iso: "TZ",
    name: "Tanzania",
  },
  {
    iso: "TG",
    name: "Togo",
  },
  {
    iso: "TN",
    name: "Tunisia",
  },
  {
    iso: "UG",
    name: "Uganda",
  },
  {
    iso: "ZM",
    name: "Zambia",
  },
  {
    iso: "ZW",
    name: "Zimbabwe",
  },
];

type Props = {
  value: Country | undefined;
  handleUpdate: (value: Country) => void;
};

export default function CountrySelect({ value, handleUpdate }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value?.name || "Select country..."}
          <CaretUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search countries..." className="h-9" />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {/* <ScrollArea className="h-72"> */}
              {countries.map((country) => (
                <CommandItem
                  key={country.iso}
                  value={country.name}
                  onSelect={(currentValue) => {
                    const country = countries.find(
                      (country) => country.name.toLowerCase() === currentValue
                    );
                    handleUpdate(country!);
                    setOpen(false);
                  }}
                >
                  {country.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === country ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              {/* </ScrollArea> */}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
