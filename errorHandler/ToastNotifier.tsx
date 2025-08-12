// ToastNotifier.tsx
import { useEffect } from "react";
import { toast } from "react-hot-toast";

interface ToastNotifierProps {
  type: "success" | "error" | "loading";
  message: string;
}

const ToastNotifier = ({ type, message }: ToastNotifierProps) => {
  useEffect(() => {
    if (!message) return;

    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "loading":
        toast.loading(message);
        break;
      default:
        break;
    }
  }, [type, message]);

  return null; 
};

export default ToastNotifier;
