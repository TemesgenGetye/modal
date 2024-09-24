"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null); // Corrected typing for the dialog ref

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal(); // Show modal if it's not open
    }
  }, []);

  const closeModal = () => {
    // Navigate to /employee to remove the @model parallel route
    router.back(); // Ensure this aligns with your navigation strategy
  };

  return (
    <div className="absolute inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/70">
      <dialog
        ref={dialogRef}
        className="relative flex h-[400px] w-[400px] items-center justify-center rounded-sm border-gray-100 bg-white text-4xl font-semibold shadow-lg"
      >
        <button
          onClick={closeModal}
          className="absolute right-0 top-0 cursor-pointer p-3 text-xl"
        >
          X
        </button>
        {params.id}
      </dialog>
    </div>
  );
}

export default Page;
