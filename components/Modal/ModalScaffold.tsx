import { useState, useEffect, useRef, FC } from "react";
import {createPortal} from "react-dom";

interface ModalScaffoldProps {
  selector: string;
}
const ModalScaffold : FC<ModalScaffoldProps> = ({ children ,selector }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null)
  useEffect(() => {
   ref.current = document.getElementById(selector);
    // to make sure the modal is ready and mounted in the DOM
   setMounted(true);
  }, [selector]);
  return mounted && createPortal(children, ref.current);
}

export default ModalScaffold;
