"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const STEPS = [
  "/services/naturalPersonFull/personalInfo",
  "/services/naturalPersonFull/income",
  "/services/naturalPersonFull/taxRelief",
  "/services/naturalPersonFull/summary",
];

export default function FormControlButton() {
  const pathname = usePathname();
  const router = useRouter();

  const hasNext = () => {
    const index = STEPS.indexOf(pathname);

    if (index < 0) {
      return false;
    }

    return index < STEPS.length - 1;
  };

  const hasPrev = () => {
    const index = STEPS.indexOf(pathname);

    return index > 0;
  };

  const handlePreviousClick = () => {
    if (!hasPrev()) {
      return;
    }

    const index = STEPS.indexOf(pathname);
    router.push(STEPS[index - 1]);
  };

  const handleNextClick = () => {
    if (!hasNext()) {
      return;
    }

    const index = STEPS.indexOf(pathname);
    router.push(STEPS[index + 1]);
  };

  const handleCompleteClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const myDialog: any = document.getElementById("resultModal");
    myDialog.showModal();
  };

  return (
    <div className="flex justify-between">
      {hasPrev() ? (
        <button onClick={handlePreviousClick} className="btn btn-primary">
          Zpět
        </button>
      ) : (
        <div></div>
      )}
      {hasNext() ? (
        <button onClick={handleNextClick} className="btn btn-primary">
          Další
        </button>
      ) : (
        <button onClick={handleCompleteClick} className="btn btn-warning">
          Dokončit
        </button>
      )}
      <dialog id="resultModal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Dokončeno</h3>
          <p className="py-4">Úspěšně jste dokončili daňové přiznání</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
