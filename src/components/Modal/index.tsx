import React from 'react'

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='relative'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed z-10 inset-0 bg-opacity-75 bg-slate-950 transition-opacity'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center text-center sm:items-center sm:p-0'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
