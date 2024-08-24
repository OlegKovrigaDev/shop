import { Search } from "lucide-react";
import { Input } from "../../ui/input";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export const SearchBar: React.FC<{
  onSearchToggle: (isVisible: boolean) => void;
}> = ({ onSearchToggle }) => {
  const [query, setQuery] = useState<string>("");
  const [isMobileSearchVisible, setIsMobileSearchVisible] =
    useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsMobileSearchVisible(false);
      onSearchToggle(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleSearchInput = () => {
    const nextVisibility = !isMobileSearchVisible;
    setIsMobileSearchVisible(nextVisibility);
    onSearchToggle(nextVisibility);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsMobileSearchVisible(false);
        onSearchToggle(false);
      }
    };

    if (isMobileSearchVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileSearchVisible]);

  return (
    <div className="relative w-full">
      <div className="flex items-center w-full">
        <div className="flex md:hidden items-center w-full">
          {isMobileSearchVisible ? (
            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border-transparent rounded w-full focus:ring-blue-500 text-black"
              placeholder="Пошук..."
              autoFocus
            />
          ) : (
            <Button
              onClick={toggleSearchInput}
              variant="ghost"
              className="hover:bg-transparent hover:text-white ml-auto"
            >
              <Search className="text-white" />
            </Button>
          )}
          {isMobileSearchVisible && (
            <Button
              variant="ghost"
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={handleSearch}
            >
              <Search className="text-black" />
            </Button>
          )}
        </div>

        <div className="hidden md:flex items-center w-full">
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-2 py-2 border-transparent rounded w-full focus:ring-blue-500 text-black"
            placeholder="Пошук..."
          />
          <Button
            variant="ghost"
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleSearch}
          >
            <Search className="text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};
