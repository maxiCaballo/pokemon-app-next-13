'use client';

import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '../store/index';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetGrid = () => {
  const { counter } = useAppSelector((state) => state.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Counter"
        title={String(counter)}
        subtitle="Products in cart"
        icon={<IoCartOutline size={50} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
