import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Clipboard } from "lucide-react";

interface ApiKeyAlertProps {
    apiKey: string;
    apiSecret: string;
    open: boolean;
    onClose: () => void;
}
const ApiKeyDialog: React.FC<ApiKeyAlertProps> = ({ apiKey, apiSecret, open , onClose }) => {

  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedSecret, setCopiedSecret] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    if (type === "key") {
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } else {
      setCopiedSecret(true);
      setTimeout(() => setCopiedSecret(false), 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Your API Credentials</DialogTitle>
          <DialogDescription>
            This is the last time you can see your API secret. Please copy and store it securely.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium">API Key</label>
              <div className="flex flex-row gap-2">
              <Input className="flex-1" readOnly value={apiKey} />

              <Button onClick={() => handleCopy(apiKey, "key")} size="icon">
                {
                  copiedKey ? <Check /> : <Clipboard size={16} />
                }

            </Button>
              </div>
            </div>
           
          </div>
          <div className="flex items-center gap-2">
          <div className="flex-1 space-y-1">
              <label className="text-sm font-medium">API Secret</label>
              <div className="flex flex-row gap-2">
              <Input type="password" className="flex-1" readOnly value={apiSecret} />

              <Button onClick={() => handleCopy(apiKey, "secret")} size="icon">
                {
                  copiedSecret ? <Check /> : <Clipboard size={16} />
                }
              
            </Button>
              </div>
            </div>
          </div>
          <Button onClick={() => { onClose(); }} variant="destructive" className="w-full">
            I Have Saved It
          </Button>
          
        </div>
      </DialogContent>
    </Dialog>
  );
  
}

export default ApiKeyDialog
