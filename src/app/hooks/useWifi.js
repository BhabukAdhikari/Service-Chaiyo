import React, { useEffect, useState } from "react";

export const useWifi = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    function handleConnected() {
      setIsConnected(true);
    }

    function handleDisConnected() {
      setIsConnected(false);
    }

    window.addEventListener("online", handleConnected);
    window.addEventListener("offline", handleDisConnected);

    return () => {
      window.removeEventListener("online", handleConnected);
      window.removeEventListener("offline", handleDisConnected);
    };
  }, []);

  return isConnected;
};
