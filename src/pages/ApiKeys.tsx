import ApiKeyDialog from "@/components/ApiKeyDialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TextPagination } from "@/components/ui/text-pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Delete, Plus, Trash } from "lucide-react";
import { useState } from "react";

const apiKeys = [
  { id: "12345", secret: "abcde12345", lastUsed: "2024-07-01" },
  { id: "67890", secret: "fghij67890", lastUsed: "2024-07-05" },
  { id: "11223", secret: "klmno11223", lastUsed: "2024-07-10" },
];

function ApiKeysTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Key ID</TableHead>
            <TableHead>Last Used</TableHead>
            <TableHead className="w-8"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiKeys.map((key) => (
            <TableRow key={key.id}>
              <TableCell>{key.id}</TableCell>
              <TableCell>{key.lastUsed}</TableCell>
              <TableCell>
                <Button variant="destructive" size="icon">
                  <Trash />{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const ApiKeysPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(apiKeys.length / 10);
  const [isApiKeyCreated, setIsApiKeyCreated] = useState(false);

  return (
    <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto gap-4">
      <h1 className="text-2xl font-semibold mb-4">API Keys</h1>
      <div className="flex flex-row justify-between">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="ml-auto"
          variant="outline"
          onClick={() => setIsApiKeyCreated(true)}
        >
          <Plus
            className="-ms-1 me-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Add Api Key
        </Button>
      </div>

      <ApiKeysTable />
      <ApiKeyDialog
        open={isApiKeyCreated}
        apiKey="12345"
        apiSecret="abcde12345"
        onClose={() => setIsApiKeyCreated(false)}
      />
    </div>
  );
};

export default ApiKeysPage;
