import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Search } from "lucide-react";

const SearchBarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Search className="hover:text-(--secondary-color) cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="bg-(--primary-color) text-white h-full border-0"
      >
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBarMobile;
