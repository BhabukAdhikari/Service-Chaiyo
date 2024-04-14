import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Suspense>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Suspense>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
