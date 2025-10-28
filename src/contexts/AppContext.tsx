import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ActivityIndicator, View } from "react-native";

// Define your context props
export interface FirebaseContextProps {
  document: string;
  updateDocument: (value: string) => void;
}

// Create a new empty (undefined) context (you don't need to export it if using only the custom hook)
const FirebaseContext = createContext<FirebaseContextProps | undefined>(
  undefined
);

// Create a custom context provider, so all context data will be self-contained
export default function FirebaseContextProvider({
  children,
}: PropsWithChildren) {
  const [loading, setLoading] = useState(true);
  const [document, setDocument] = useState("Hello Context!");

  const updateDocument = (value: string) => {
    if (value.length < 3) {
      setDocument("INVALID VALUE: " + value);
    } else {
      setDocument(value);
    }
  };

  const appContext: FirebaseContextProps = {
    document,
    updateDocument,
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, [document]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FirebaseContext.Provider value={appContext}>
      {children}
    </FirebaseContext.Provider>
  );
}

// Create a custom consumer hook (check Timeline.tsx for usage)
export function useFirebaseContext() {
  const context = useContext<FirebaseContextProps>(FirebaseContext);

  if (context === undefined) {
    throw new Error(
      "useFirebaseContext must be used inside FirebaseContextProvider!"
    );
  }

  return context;
}
